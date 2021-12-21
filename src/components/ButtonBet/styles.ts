import { color } from "react-native-reanimated";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";


interface DetailsButton {
    isAtive: boolean;
    color: string
}

export const Container = styled.TouchableOpacity<DetailsButton>` 
    backgroundColor: ${props => props.isAtive ? props.color : colors.colorDefaultButton}
    width: 35px;
    height: 35px;
    borderRadius: 20px;
    marginHorizontal: 5px;
    marginVertical: 5px;
`

export const TextButton = styled.Text`
    color: ${colors.colorWhite};
    fontFamily: 'Roboto-Bold';
    fontSize: 20px;
    textAlign: center;
    justifyContent: center;
    alignItems: center;
`