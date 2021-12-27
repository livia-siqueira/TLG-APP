import { formatNumber } from "@shared";
import React from "react";
import { Text, View } from "react-native";
import * as styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface cart {
  type: string | undefined;
  color: string | undefined;
  numbers: number[];
  price: number;
  eventRemoveBet(numers: number[]) : void
}

export const ItemCart = (props: cart) => {
  return (
    <styles.Card>
      <styles.Trash onPress={props.eventRemoveBet.bind(this, props.numbers)}>
      <Ionicons name="trash-outline" size={26} />
      </styles.Trash>
      <styles.Container color={props.color ? props.color : "white"}>
        <styles.Content>
          <styles.Numbers>{props.numbers.join(",")}</styles.Numbers>
          <styles.Details>
            <styles.Title color={props.color ? props.color : "white"}>{props.type}</styles.Title>
            <styles.Price>{formatNumber(props.price).replace(".", ",")}</styles.Price>
          </styles.Details>
        </styles.Content>
      </styles.Container>
    </styles.Card>
  );
};
