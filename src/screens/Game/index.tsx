
import React from "react";
import * as styles from "./styles";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppDispatch, RootNavigationGame, RootState } from "@types";
import { ButtonChoiceGame } from "../../components/ButtonChoiceGame";
import { ButtonBet } from "../../components/ButtonBet";
import { FlatList } from "react-native-gesture-handler";
import { changeGameSelected } from "../../store/Game";
import { NavigationScreenProp } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ButtonHeader } from "../../components/ButtonHeader/HeaderButtom";
import { useEffect } from "react";
import { colors } from "../../shared/constants/colors";
import { useCallback } from "react";
import { ButtonAction } from "../../components/ButtonActions";
import { useState } from "react";
import { methodCreateBetAPI } from "../../services/api/Cart/addBetInCart";

export const Game = (
  props: NativeStackScreenProps<RootNavigationGame, "Game">
) => {
  const [numbersBet, setNumbersBet] = useState<number[]>([]);
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
          <Item
            title="Cart"
            iconName="cart"
            color={colors.colorDetailsGreen}
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const gameActual = useSelector((state: RootState) => state.game.gameActual);
  const user = useSelector((state: RootState) => state.user.userActual);
  const dispatch: AppDispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);

  const addNumberInBet = useCallback(
    (item: number) => {
      setNumbersBet((numbers) => {
        const exist = numbers?.includes(item);
        console.log(item);
        return [...numbers, item];
      });
    },
    [setNumbersBet]
  );

  const removeNumberInBet = useCallback(
    (item: number) => {
      setNumbersBet((numbers) => {
        return numbers.filter((number) => number != item);
      });
    },
    [setNumbersBet]
  );

  const addBetInCart = useCallback(async() => {
    await methodCreateBetAPI({numbers: numbersBet, idUser: user ? user?.id : 0, idTypeGame: gameActual ? gameActual?.id : 0, price: 30.00})
  }, [])
  const selectGameActual = useCallback((title: string) => {
    dispatch(changeGameSelected(title));
  }, []);

  const formArrayNumber: number[] = Array.from({
    length: gameActual?.range ? gameActual?.range : 0,
  });
  const array: number[] = formArrayNumber.map((_, index) => index + 1);

  return (
    <styles.Container>
      <styles.PageTitle>
        <styles.Title>
          NEW BET FOR <styles.TypeGame>{gameActual?.type}</styles.TypeGame>
        </styles.Title>
      </styles.PageTitle>
      <styles.Text>Choose a game</styles.Text>
      <styles.Button>
        {games.map((item) => {
          const isExist = item.type === gameActual?.type;
          return (
            <ButtonChoiceGame
              isAtive={isExist}
              color={item.color}
              title={item.type}
              event={selectGameActual}
            />
          );
        })}
      </styles.Button>
      <styles.Description>
        <styles.Text>Fill your bet</styles.Text>
        <styles.ContainerDescription>
          <styles.TextDescription numberOfLines={5}>
            {gameActual?.description}
          </styles.TextDescription>
        </styles.ContainerDescription>
      </styles.Description>
      <styles.ContainerGame>
        <styles.Game>
          <FlatList
            numColumns={8}
            keyExtractor={(_, index) => index.toString()}
            data={array}
            renderItem={(item) => (
              <ButtonBet
                title={item.item}
                numbers = {numbersBet}
                selectNumber={addNumberInBet}
                removeNumberSelect={removeNumberInBet}
                color={gameActual ? gameActual.color : 'white'}
              />
            )}
          />
        </styles.Game>
        <styles.Actions>
          <styles.ButtonLeft>
            <ButtonAction
              title="Clear Game"
              event={() => {}}
              color="transparent"
              fontColor={colors.colorTextFooterCart}
            />
            <ButtonAction
              title="Complete Game"
              event={() => {}}
              color="transparent"
              fontColor={colors.colorTextFooterCart}
            />
          </styles.ButtonLeft>
          <ButtonAction
            title="Add to cart"
            event={addBetInCart}
            color={colors.colorTextFooterCart}
            fontColor={colors.colorWhite}
          />
        </styles.Actions>
      </styles.ContainerGame>
    </styles.Container>
  );
};
