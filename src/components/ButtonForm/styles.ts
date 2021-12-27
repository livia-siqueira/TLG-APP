import styled from "styled-components/native";

import { colors } from "../../shared/constants/colors";

export const Button = styled.TouchableOpacity`
      width: 100%;
      justify-content: center;
      align-items: center;
`;

export const TextButton = styled.Text`
    color: ${colors.colorDetailsGreen};
    font-size: 32px;
    font-family: 'Roboto-Bold';
`

export const Title = styled.Text` 
    margin-vertical: 20px;
`
