import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Content = styled.View`
  height: 60%;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: 50px;
  color: ${colors.colorTextFooterCart};
  font-family: "Roboto-BoldItalic";
`;

export const Title = styled.Text`
  font-family: "Roboto-BoldItalic";
  color: ${colors.colorTextTitle};
  font-size: 40px;
  margin-top: 40px;
  margin-left: -200px;
`;

export const AreaPrice = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: -20px;
`;

export const Negrito = styled.Text`
  font-family: "Roboto-BoldItalic";
`;

export const TextCart = styled.Text`
  font-size: 22px;
  font-family: "Roboto-ThinItalic";
  color: ${colors.colorTextTitle};
`;

export const MessageEmpty = styled.Text`
    font-size: 20px;
    font-family: 'Roboto-ThinItalic';
    margin-top: 20%;
`;

export const Button = styled.TouchableOpacity`
  border-bottom-left-radius: 12px;
  background-color: ${colors.colorFooterCart};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
`;
