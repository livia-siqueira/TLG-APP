import styled from "styled-components/native";

import { colors } from "../../shared/constants/colors";

export const Button = styled.TouchableOpacity`
      width: 100%;
      justifyContent: center;
      alignItems: center;
`;

export const TextButton = styled.Text`
    color: ${colors.colorDetailsGreen};
    fontSize: 40px;
    fontFamily: 'Roboto-Bold';
`

export const Title = styled.Text` 
    marginVertical: 50px;
`
