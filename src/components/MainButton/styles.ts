import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Button = styled.View`
        backgroundColor: ${colors.colorDetailsGreen};
        paddingVertical: 12px;
        paddingHorizontal: 30px;
        borderRadius: 25px;
        marginVertical: 15px;
        alignItems: center;
        color: ${colors.colorWhite};
`;

export const TextButton = styled.Text`
    color: ${colors.colorWhite};
    fontSize: 20px;
    fontFamily: 'Roboto-Bold';
`