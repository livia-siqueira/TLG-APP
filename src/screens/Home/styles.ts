import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Container = styled.View`
  margin-vertical: 30px;
  margin-horizontal: 20px;
  width: 90%;
  margin-bottom: 180px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: "Roboto-BoldItalic";
  font-size: 22px;
  color: ${colors.colorTextTitle};
  text-align: left;
  margin-vertical: 20px;
`;

export const MessageEmpty = styled.Text``;
