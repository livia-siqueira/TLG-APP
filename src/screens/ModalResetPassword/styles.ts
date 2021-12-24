import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Container = styled.View` 
    flex: 1;
    width: 80%;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 50%;
    margin: 20px;
    margin-top: 160px;
    background-color: white;
    elevation: 10;
    border-radius: 12px;

`

export const Buttons = styled.View` 

margin: 20px;
`

export const Button = styled.TouchableOpacity`
    background-color: ${colors.colorDetailsGreen};
    padding: 10px;
    border-radius: 12px;
    margin: 2px;
    justify-content: center;
    align-items: center;

`

export const Title = styled.Text` 
    font-family: 'Roboto-BoldItalic';
    font-size: 20px;
    color: ${colors.colorTextTitle};

`

export const Input = styled.TextInput` 
    width: 90%;
    paddingHorizontal: 12px;
    fontSize: 20px;
    height: 70px;
    borderBottomColor: ${colors.colorBorderBottomHeader};
    borderBottomWidth: 1px;

`

export const TextButton = styled.Text` 
    color: ${colors.colorWhite};
    font-family: 'Roboto-BoldItalic';
    font-size: 15px;

`