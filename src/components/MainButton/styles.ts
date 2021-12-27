import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Button = styled.View`
        background-color: ${colors.colorDetailsGreen};
        padding-vertical: 12px;
        padding-horizontal: 30px;
        border-radius: 25px;
        margin-vertical: 10px;
        align-items: center;
        color: ${colors.colorWhite};
        width: ${Dimensions.get('screen').width/2};
`;

export const TextButton = styled.Text`
    color: ${colors.colorWhite};
    font-size: 20px;
    font-family: 'Roboto-Bold';
`