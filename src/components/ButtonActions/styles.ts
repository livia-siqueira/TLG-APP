import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../shared/constants";

interface DetailsButton {
  color: string;
  fontColor: string;
}

export const Container = styled.TouchableOpacity<DetailsButton>`
  background-color: ${(props) => props.color};
  width: 30%;
  height: 50%;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-color: ${(props) => props.fontColor};
  border-width: 1px;
  font-family: "Roboto-Bold";
  padding-horizontal: 5%;
  margin-left: 2px;
`;

export const Content = styled.View``;

export const TextButton = styled.Text<DetailsButton>`
  color: ${(props) => props.fontColor};
  text-align: center;
`;

export const TextIcon = styled.View`
  margin-left: 20px;
 
`;
