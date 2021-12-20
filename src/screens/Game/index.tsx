//ion-ios-cart
//cart-sharp

import React from "react";
import * as styles from "./styles";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@types";
import { ButtonChoiceGame } from "../../components/ButtonChoiceGame";
import { ButtonBet } from "../../components/ButtonBet";
import { FlatList } from "react-native-gesture-handler";
import { changeGameSelected } from "../../store/Game";

export const Game = () => {
  const gameActual = useSelector((state: RootState) => state.game.gameActual);
  const dispatch : AppDispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);
  const changeGameActual = (title: string) => {
    dispatch(changeGameSelected(title))
  }
  const formArrayNumber: number[] = Array.from({
    length: gameActual?.range ? gameActual?.range : 0,
  });
  const array : number[] = formArrayNumber.map((_, index) => index + 1);
  console.log(gameActual);
  return (
    <styles.Container>
      <styles.PageTitle>
        <styles.Title>
          NEW BET FOR <styles.TypeGame>{gameActual?.type}</styles.TypeGame>
        </styles.Title>
      </styles.PageTitle>
      <Text>Choose a game</Text>
      <styles.Button>
        {games.map((item) => (
          <ButtonChoiceGame color={item.color} title={item.type} event={changeGameActual} />
        ))}
      </styles.Button>
      <styles.Game>
        <FlatList
          numColumns={5}
          keyExtractor={(item, index) => index.toString()}
          data={array}
          renderItem={(item) => (
              <ButtonBet title={`${item.item}`}/>
          )}
        />
      </styles.Game>
    </styles.Container>
  );
};
