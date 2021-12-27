import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";
interface propsContainerItemList {
  color: string;
}

export const Container = styled.View<propsContainerItemList>`
  border-left-width: 4px;
  border-radius: 4px;
  border-left-color: ${(props) => props.color};
  margin-horizontal: 20px;
  margin-vertical: 10px;
  height: 90px;
`;

export const Section = styled.View``;

export const Numbers = styled.Text<propsContainerItemList>`
  color: ${colors.colorTextTitle};
  font-family: 'Roboto-BoldItalic';
  font-size: 18px;

`;

export const Type = styled.Text<propsContainerItemList>`
color: ${props => props.color};
font-size: 20px;
font-family: 'Roboto-BoldItalic';

`

export const ContentBet = styled.View`
  flex-direction: row;
  margin-vertical: 10px;

`;

export const Price = styled.Text`
  color: ${colors.colorText};
  font-size: 15px;
  font-family: 'Roboto-ThinItalic';
  margin-horizontal: 10px;
`;

export const Data = styled.Text`
  color: ${colors.colorText};
  font-size: 15px;
  font-family: 'Roboto-ThinItalic';
`;

export const AreaAction = styled.View``;

export const Main = styled.View`
  margin-vertical: 10px;
  margin-horizontal: 10px;

`;
