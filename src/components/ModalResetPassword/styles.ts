import styled from "styled-components/native";
import { colors } from "@shared";

export const Container = styled.View` 
    flex: 1;
    width: 280px;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 280px;
    margin: 20px auto;
    margin-top: 160px ;
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
    padding-horizontal: 12px;
    font-size: 20px;
    height: 70px;
    border-bottom-color: ${colors.colorBorderBottomHeader};
    border-bottom-width: 1px;

`

export const TextButton = styled.Text` 
    color: ${colors.colorWhite};
    font-family: 'Roboto-BoldItalic';
    font-size: 15px;

`