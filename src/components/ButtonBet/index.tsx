import React from "react";
import * as styles from "./styles";

interface propsButtonBet {
  selectNumber(item: number): void;
  removeNumberSelect(item: number): void;
  title: number;
  numbers: number[];
  color: string;
}

export const ButtonBet = (props: propsButtonBet) => {
  const isAtive = props.numbers.includes(props.title);
  return (
    <styles.Container
      isAtive={isAtive}
      color={props.color}
      onPress={
        isAtive
          ? props.removeNumberSelect.bind(this, props.title)
          : props.selectNumber.bind(this, props.title)
      }
    >
      <styles.TextButton>{props.title}</styles.TextButton>
    </styles.Container>
  );
};
