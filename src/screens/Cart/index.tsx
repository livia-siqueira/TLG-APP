import { ButtonHeader } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppDispatch, RootNavigationGame, RootState } from "@types";
import React, { useCallback, useEffect } from "react";
import { View, FlatList} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { ItemCart } from "../../components/ItemCart";
import { colors } from "../../shared/constants/colors";
import * as styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { formatNumber } from "@helpers";
import { addBetInCartAsync } from "../../store/Cart/thunk";

export const Cart = (
  props: NativeStackScreenProps<RootNavigationGame, "Cart">
) => {
 const dispatch: AppDispatch = useDispatch();
  const userLogged = useSelector((state: RootState) => state.user.userActual);
  const cartUser = useSelector((state: RootState) => state.cart.bets);
  const games = useSelector((state: RootState) => state.game.games);
  const cartTotal = useSelector((state: RootState) => state.cart.totalCart);
  const betsOfUser = cartUser.filter((bet) => {
    bet.idUser === userLogged?.id;
  });
  console.log(cartUser);

  const itemsApi = cartUser.map((item) => {
    return { id: item.idTypeGame.toString(), numbers: [...item.numbers] };
  });

  const addBetInCart = useCallback(async () => {
   
   await dispatch(addBetInCartAsync(itemsApi))
  }, [userLogged, cartUser])

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
          <Item
            title="Cart"
            iconName="person-circle-outline"
            color={colors.colorDetailsGreen}
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);
  return (
    <styles.Container>
      <styles.Title>Cart</styles.Title>
      <styles.Content>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={cartUser}
          renderItem={(item) => {
            const gameBet = games.find(
              (gam) => gam.id === item.item.idTypeGame
            );
            return (
              <ItemCart
                type={gameBet?.type}
                color={gameBet?.color}
                numbers={item.item.numbers}
                price={item.item.price}
              />
            );
          }}
        />
        <styles.AreaPrice>
            <styles.TextCart><styles.Negrito>CART</styles.Negrito> TOTAL: {formatNumber(cartTotal)}</styles.TextCart>
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
    </styles.Container>
  );
};
