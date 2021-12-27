import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "@shared";

export const Input = styled.TextInput`
  border-bottom-color: ${colors.colorBorder};
  border-bottom-width: 1px;
  width: 90%;
  margin-vertical: 5%;
  height: 50px;
`;

export const Button = styled.TouchableOpacity`
  width: ${Dimensions.get("screen").width};
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  font-family: "Roboto-BoldItalic";
  font-size: 50px;
  color: ${colors.colorTextFooterCart};
`;
