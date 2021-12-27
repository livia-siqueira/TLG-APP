import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { colors } from "../../shared/constants";

export const Button = styled.TouchableOpacity`
      width: ${Dimensions.get('window').width}px;
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
