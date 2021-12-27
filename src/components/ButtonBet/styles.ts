import { color } from "react-native-reanimated";
import styled from "styled-components/native";
import { colors } from "../../shared/constants";

interface DetailsButton {
  isAtive: boolean;
  color: string;
}

export const Container = styled.TouchableOpacity<DetailsButton>` 
    background-color: ${(props) =>
    props.isAtive ? props.color : colors.colorDefaultButton}
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-horizontal: 5px;
    margin-vertical: 5px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
  color: ${colors.colorWhite};
  font-family: "Roboto-Bold";
  font-size: 18px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
