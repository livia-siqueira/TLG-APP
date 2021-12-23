import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";


export const Input = styled.TextInput`
    borderBottomColor: ${colors.colorBorder};
    borderBottomWidth: 1px;
    width: 90%;
    marginVertical: 5%;
    height: 50px;
`

export const Button = styled.TouchableOpacity`
    width: ${Dimensions.get('screen').width};
    justifyContent: center;
    alignItems: center;

`
export const TextButton = styled.Text`
    fontFamily: 'Roboto-BoldItalic';
    fontSize: 50px;
    color: ${colors.colorTextFooterCart};
`