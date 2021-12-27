import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface propsButton {
  color: string;
  isAtive: boolean;
}

export const ContainerButton = styled.TouchableOpacity<propsButton>`
  border-color: ${(props) => props.color};
  border-width: 2px;
  width: ${Dimensions.get("screen").width / 4}px;
  border-radius: 12px;
  padding-horizontal: 12px;
  padding-vertical: 5px;
  margin-horizontal: 10px;
  margin-vertical: 6px;
  background-color: ${(props) => (props.isAtive ? props.color : "white")};
`;

export const TextButton = styled.Text<propsButton>`
  color: ${(props) => (props.isAtive ? "white" : props.color)};
  font-size: 15px;
`;

export const Button = styled.View``;
