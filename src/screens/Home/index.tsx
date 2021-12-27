import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
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
  const [loading, setLoading] = useState<boolean>(true);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      dispatch(logoutUser());
    } catch (e: any) {
      throw new Error(e);
    }
  };

  const handleResetBet = useCallback(async () => {
    dispatch(resetBet());
  }, []);

  const handleBets = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(getBetAsync(gamesOnFilter));
    } catch (e: any) {
      throw new Error(e);
    }
    setLoading(false);
  }, [gamesOnFilter, handleResetBet]);

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

  useEffect(() => {
    handleResetBet();
  }, []);

  useEffect(() => {
   handleBets();
  }, [gamesOnFilter, handleBets, handleResetBet]);

  const filteredGame = (type: string) => {
    dispatch(filterGame({ game: type }));
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.colorPrimary} />
      </View>
    );
  }

  return (
    <styles.Container>
      <styles.Buttons>
        <styles.MessageEmpty style={{ marginTop: 0 }}>
          Filters:{" "}
        </styles.MessageEmpty>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          data={games}
          renderItem={(item) => {
            const isAtive = gamesOnFilter.includes(item.item.type);
            return (
              <ButtonChoiceGame
                key={item.item.type}
                isAtive={isAtive}
                color={item.item.color}
                title={item.item.type}
                event={filteredGame}
              />
            );
          }}
        />
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
