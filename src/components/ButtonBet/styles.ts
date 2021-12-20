import { color } from "react-native-reanimated";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";


export const Container = styled.TouchableOpacity` 
    backgroundColor: ${colors.colorDefaultButton}
    width: 30px;
    height: 30px;
    borderRadius: 20px;
`

export const TextButton = styled.Text`
    color: ${colors.colorWhite}
    textAlign: center;
    justifyContent: center;
    alignItems: center;
`