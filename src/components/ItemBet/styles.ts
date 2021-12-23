import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";
interface propsContainerItemList {
  color: string;
}

export const Container = styled.View<propsContainerItemList>`
  borderLeftWidth: 4px;
  borderRadius: 4px;
  borderLeftColor: ${(props) => props.color};
  marginHorizontal: 20px;
  marginVertical: 10px;
  height: 90px;
`;

export const Section = styled.View``;

export const Numbers = styled.Text<propsContainerItemList>`
  color: ${colors.colorTextTitle};
  fontFamily: 'Roboto-BoldItalic';
  fontSize: 18px;

`;

export const Type = styled.Text<propsContainerItemList>`
color: ${props => props.color};
fontSize: 20px;
fontFamily: 'Roboto-BoldItalic';

`

export const ContentBet = styled.View`
  flexDirection: row;
  marginVertical: 10px;

`;

export const Price = styled.Text`
  color: ${colors.colorText};
  fontSize: 15px;
  fontFamily: 'Roboto-ThinItalic';
  marginHorizontal: 10px;
`;

export const Data = styled.Text`
  color: ${colors.colorText};
  fontSize: 15px;
  fontFamily: 'Roboto-ThinItalic';
`;

export const AreaAction = styled.View``;

export const Main = styled.View`
  marginVertical: 10px;
  marginHorizontal: 10px;

`;
