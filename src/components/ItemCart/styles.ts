import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Container = styled.View<{ color: string }>`
  border-left-width: 4px;
  border-radius: 4px;
  border-left-color: ${(props) => props.color};
  margin-horizontal: 10px;
  height: 70px;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  margin-horizontal: 10px;
  margin-vertical: 10px;
`;
export const Content = styled.View`
  margin-horizontal: 10px;
`;
export const Details = styled.View`
  flex-direction: row;
  margin-vertical: 10px;
`;
export const Numbers = styled.Text`
  font-size: 18px;
  font-family: "Roboto-ThinItalic";
  color: ${colors.colorTextTitle};
`;
export const Title = styled.Text<{ color: string }>`
  font-size: 20px;
  color: ${(props) => props.color};
  font-family: "Roboto-BoldItalic";
`;

export const Price = styled.Text` 
    margin-horizontal: 8%;
    font-family: 'Roboto-ThinItalic';
    color: ${colors.colorTextTitle}
    font-size: 20px;

`;

export const Trash = styled.TouchableOpacity``;
