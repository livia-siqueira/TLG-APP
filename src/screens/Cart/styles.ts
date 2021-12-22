import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Container = styled.View`
  width: 90%;
  backgroundColor: ${colors.colorWhite};
  margin: 20px;
  borderRadius: 12px;
  borderColor: ${colors.colorBorderCart};
  borderWidth: 1px;
  height: 70%;
`;

export const Content = styled.View` 
    height: 60%;

`

export const TextButton = styled.Text` 
    textAlign: center;
    fontSize:50px;
    color: ${colors.colorTextFooterCart};
    fontFamily: 'Roboto-BoldItalic';
`

export const Title = styled.Text`
    fontFamily: 'Roboto-BoldItalic';
    color: ${colors.colorTextTitle};
    fontSize: 40px;
    marginHorizontal: 20px;
    marginVertical: 20px;
`;

export const AreaPrice = styled.View` 
    margin: 20px;
`

export const Negrito = styled.Text`
    fontFamily: 'Roboto-BoldItalic';
`

export const TextCart = styled.Text` 
    fontSize: 22px;
    fontFamily: 'Roboto-ThinItalic';
    color: ${colors.colorTextTitle};
`

export const Button = styled.TouchableOpacity`
borderBottomLeftRadius: 12px;
    backgroundColor: ${colors.colorFooterCart};
    justifyContent: center;
    alignItems: center;
    width: 100%;
    height: 35%;

`