import styled from "styled-components/native";
import { colors } from "../../shared/constants";

export const Container = styled.View`
  margin-vertical: 30px;
  margin-horizontal: 20px;
  width: 350px;
  margin-bottom: 250px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 350px;
`;

export const Title = styled.Text`
  font-family: "Roboto-BoldItalic";
  font-size: 22px;
  color: ${colors.colorTextTitle};
  text-align: left;
  margin-vertical: 20px;
`;

export const MessageEmpty = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-BoldItalic';
  color: ${colors.colorTextTitle};
  text-align: center;
  margin-vertical: 80px;

`;
