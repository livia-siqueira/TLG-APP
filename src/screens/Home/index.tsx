import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { ButtonChoiceGame, ButtonHeader, ItemBet } from "@components";
import {
  AppDispatch,
  RootNavigationGame,
  RootState,
  colors,
  useCallback,
  useEffect,
} from "@shared";
import { filterGame, resetBet } from "../../store/Slices/Bet";
import { getBetAsync } from "../../store/Slices/Bet/thunk";
import * as styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../../store/Slices/User";

export const Home = (
  props: NativeStackScreenProps<RootNavigationGame, "Home">
) => {
  const games = useSelector((state: RootState) => state.game.games);
  const betPlaced = useSelector((state: RootState) => state.bet.betsPlaced);
  const gamesOnFilter = useSelector(
    (state: RootState) => state.bet.betsSelected
  );
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      dispatch(logoutUser());
    } catch (e: any) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
          <Item
            title="New Bet"
            iconName="game-controller"
            color={colors.colorDetailsGreen}
            onPress={() => props.navigation.navigate("NewBet")}
          />
          <Item
            title="LogOut"
            iconName="log-out-outline"
            color={colors.colorDetailsGreen}
            onPress={handleLogout}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const gamesJust = betPlaced?.map((game) => {
    return game.game_id;
  });

  const handleBets = useCallback(async () => {
    try {
      await dispatch(getBetAsync(gamesOnFilter));
    } catch (e: any) {
      throw new Error(e);
    }
  }, [gamesOnFilter]);

  useEffect(() => {
    //dispatch(resetBet());
    handleBets();
  }, []);

  let gamesUser: string[] = [];

  const gamesOfUser = games.filter((game) => {
    if (gamesJust?.includes(game.id)) {
      gamesUser.push(game.type);
    }
    return gamesJust?.includes(game.id) && game.type;
  });

  const filteredGame = (type: string) => {
    dispatch(filterGame({ game: type }));
  };

  return (
    <styles.Container>
      <styles.Buttons>
        {gamesOfUser.map((item) => {
          const isAtive = gamesOnFilter.includes(item.type);
          return (
            <ButtonChoiceGame
              isAtive={isAtive}
              color={item.color}
              title={item.type}
              event={filteredGame}
            />
          );
        })}
      </styles.Buttons>
      <styles.Title>RECENT GAMES</styles.Title>
      {betPlaced.length === 0 && (
        <styles.MessageEmpty>
          There are no bets. To start playing start a new game from the bottom
          menu under "New Bet".
        </styles.MessageEmpty>
      )}
      <FlatList
        data={betPlaced}
        keyExtractor={(item) => item.choosen_numbers}
        renderItem={(item) => {
          const gameBet = games.find((gam) => {
            return gam.id === item.item.game_id;
          });
          return (
            <ItemBet
              type={gameBet ? gameBet.type : ""}
              color={gameBet ? gameBet.color : "white"}
              numbers={item.item.choosen_numbers}
              price={item.item.price}
              data={item.item.created_at}
            />
          );
        }}
      />
    </styles.Container>
  );
};
