import { ButtonHeader, ItemCart, Card } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, FlatList, Alert} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { colors, formatNumber, AppDispatch, RootNavigationGame, RootState, useCallback, useEffect } from "@shared";
import * as styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { addBetInCartAsync } from "../../store/Slices/Cart/thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../../store/Slices/User/index";
import { removeBetCart, resetCart } from "../../store/Slices/Cart/index";
import { resetBet } from "../../store/Slices/Bet";


export const Cart = (
  props: NativeStackScreenProps<RootNavigationGame, "Cart">
) => {
 const dispatch: AppDispatch = useDispatch();
  const userLogged = useSelector((state: RootState) => state.user.userActual);
  const cartUser = useSelector((state: RootState) => state.cart.bets);
  const games = useSelector((state: RootState) => state.game.games);
  const cartTotal = useSelector((state: RootState) => state.cart.totalCart);
  const betsOfUser = cartUser.filter((bet) => {
    bet.user_id === userLogged?.id;
  });

  
  const items = cartUser.map((item) => {
    return { id: item.game_id.toString(), numbers: [...item.choosen_numbers] };
  });

  const eventRemoveBet = useCallback((numbers: number[]) => {
    dispatch(removeBetCart(numbers))
  }, [])

  const addBetInCart = useCallback(async () => {
    if(cartTotal >= 30) {
      await dispatch(addBetInCartAsync(items))
      dispatch(resetCart());
      props.navigation.navigate("Home");

    }
    else {
      Alert.alert("Error saving bet", "Bet at least R$30.00 to complete your cart.", [
        {
          text: "OK"
        }
      ])
    }
  }, [userLogged, cartUser])

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
      headerTitle: "New Bet",
      headerTitleStyle: {
        color: colors.colorTextTitle,
        fontFamily: "Roboto-BoldItalic",
        fontSize: 28,
      },
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
          <Item
            title="Cart"
            iconName="person-circle-outline"
            color={colors.colorDetailsGreen}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <Item
            title="Logout"
            iconName="log-out-outline"
            color={colors.colorDetailsGreen}
            onPress={handleLogout}
          />
        </HeaderButtons>
      ),
    });
  }, []);
  return (
    <Card>
      <styles.Title>CART</styles.Title>
      <styles.Content>
        {cartUser.length === 0 && <styles.MessageEmpty>Empty cart. Start playing now.</styles.MessageEmpty>}
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={cartUser}
          renderItem={(item) => {
            const gameBet = games.find(
              (gam) => gam.id === item.item.game_id
            );
            return (
              <ItemCart
                type={gameBet?.type}
                color={gameBet?.color}
                numbers={item.item.choosen_numbers}
                price={item.item.price}
                eventRemoveBet={eventRemoveBet}
              />
            );
          }}
        />
        <styles.AreaPrice>
            <styles.TextCart><styles.Negrito>CART</styles.Negrito> TOTAL: {formatNumber(cartTotal).replace(".", ",")}</styles.TextCart>
        </styles.AreaPrice>
      </styles.Content>
      <styles.Button>
        <View>
          <styles.TextButton onPress={addBetInCart}>
            Save
            <Ionicons
              name="md-arrow-forward"
              size={26}
              color={colors.colorTextFooterCart}
            />
          </styles.TextButton>
        </View>
      </styles.Button>
    </Card>
  );
};
