import React from "react";
import * as styles from "./styles";
import { FlatList } from "react-native";
import { AppDispatch, RootNavigationGame, RootState } from "@types";
import { changeGameSelected } from "../../store/Game";
import {
  useEffect,
  useState,
  useCallback,
  useSelector,
  useDispatch,
  NativeStackScreenProps,
  HeaderButtons,
  Item,
  sortNumber,
} from "@helpers";
import { colors } from "../../shared/constants/colors";
import { methodCreateBetAPI } from "../../services/api/Cart/addBetInCart";
import {
  ButtonChoiceGame,
  ButtonBet,
  ButtonAction,
  ButtonHeader,
} from "@components";
import { addBetCart } from "../../store/Cart";
import { getUserAsync } from "../../store/User/thunk";

export const Game = (
  props: NativeStackScreenProps<RootNavigationGame, "Game">
) => {
  const [numbersBet, setNumbersBet] = useState<number[]>([]);


  const gameActual = useSelector((state: RootState) => state.game.gameActual);
  const user = useSelector((state: RootState) => state.user.userActual);
  const dispatch: AppDispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);

  const addNumberInBet = useCallback(
    (item: number) => {
      setNumbersBet((numbers) => {
        const exist = numbers?.includes(item);
        if (!exist) {
          return [...numbers, item];
        }
        return numbers;
      });
    },
    [gameActual]
  );

  const completeGame = useCallback(() => {
    setNumbersBet((numbers) => {
      if (gameActual) {
        const getNumbers = [...numbers];
        while (getNumbers.length < gameActual["max_number"]) {
          const numberGame = Math.floor(Math.random() * gameActual.range);
          if (!getNumbers.includes(numberGame) && numberGame !== 0) {
            getNumbers.push(numberGame);
          }
        }
        return getNumbers;
      } else {
        return numbers;
      }
    });
  }, [gameActual]);

  const removeNumberInBet = useCallback(
    (item: number) => {
      setNumbersBet((numbers) => {
        return numbers.filter((number) => number != item);
      });
    },
    [setNumbersBet]
  );

  const resetGame = () => {
    setNumbersBet([]);
  };

  

  const addBetInCart = useCallback(() => {
    dispatch(
      addBetCart({
        choosen_numbers: sortNumber(numbersBet),
        user_id: user ? user?.id : 0,
        game_id: gameActual ? gameActual?.id : 0,
        price: gameActual ? gameActual.price : 0,
        created_at: new Date().toString()
      })
    );
    resetGame();
  }, [numbersBet, gameActual]);
  
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
                numbers={numbersBet}
                selectNumber={addNumberInBet}
                removeNumberSelect={removeNumberInBet}
                color={gameActual ? gameActual.color : "white"}
              />
            )}
          />
        </styles.Game>
        <styles.Actions>
          <styles.ButtonLeft>
            <ButtonAction
              title="Clear Game"
              event={resetGame}
              color="transparent"
              fontColor={colors.colorTextFooterCart}
            />
            <ButtonAction
              title="Complete Game"
              event={completeGame}
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
