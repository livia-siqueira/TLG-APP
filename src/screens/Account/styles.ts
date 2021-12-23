import { Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Container = styled.View`
  width: 90%;
  backgroundColor: ${colors.colorWhite};
  borderRadius: 12px;
  borderColor: ${colors.colorBorderCart};
  borderWidth: 1px;
  height: 70%;
  justifyContent: center;
  alignItems: center;
  marginHorizontal: 20px;
  marginVertical: 100px;
`

export const ContainerImage = styled.View`

`

export const Title = styled.Text`
    fontSize: 22px;
    marginVertical: 5%;
`
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
export const Icon = styled.TouchableOpacity` 
    marginVertical: 0px;
    left: 40%;

`
export const Edit = styled.Text` 
    fontFamily: 'Roboto-BoldItalic';
    fontSize: 15px;
    color: ${colors.colorTextFooterCart};
`