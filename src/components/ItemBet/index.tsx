import { formatNumber } from "../../shared/helpers";
import React from "react";
import { View } from "react-native";
import * as styles from "./styles";

interface AddToCartData {
  color: string;
  price: number;
  type: string;
  numbers: string;
  data: string;
}

export const ItemBet = (props: AddToCartData) => {
  const data = props.data.match(/\d{4}-\d{2}-\d{1,2}/g);
  const year = data ? data[0].match(/\d{4}/) : "";
  const rest = data ? data[0].match(/-\d{1,2}/g) : "";
  const month = rest ? rest[0].match(/\d{1,2}/) : "";
  const day = rest ? rest[1].match(/\d{1,2}/) : "";

  return (
    <styles.Container color={props.color}>
      <styles.Main>
        <View>
          <styles.Numbers color={props.color}>{props.numbers}</styles.Numbers>
          <styles.Section>
            <styles.ContentBet>
              <styles.Data>
                {day}/{month}/{year}
              </styles.Data>
              <styles.Price>({formatNumber(props.price)})</styles.Price>
            </styles.ContentBet>
          </styles.Section>
          <styles.Type color={props.color}>
              {props.type}
          </styles.Type>
        </View>
      </styles.Main>
    </styles.Container>
  );
};
