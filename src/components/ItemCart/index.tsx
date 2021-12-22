import { formatNumber } from "../../shared/helpers/index";
import React from "react";
import { Text, View } from "react-native";
import * as styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface cart {
  type: string | undefined;
  color: string | undefined;
  numbers: number[];
  price: number;
}

export const ItemCart = (props: cart) => {
  return (
    <styles.Card>
      <Ionicons name="trash-outline" size={26} />
      <styles.Container color={props.color ? props.color : "white"}>
        <styles.Content>
          <styles.Numbers>{props.numbers.join(",")}</styles.Numbers>
          <styles.Details>
            <styles.Title color={props.color ? props.color : "white"}>{props.type}</styles.Title>
            <styles.Price>{formatNumber(props.price)}</styles.Price>
          </styles.Details>
        </styles.Content>
      </styles.Container>
    </styles.Card>
  );
};
