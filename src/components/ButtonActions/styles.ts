import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

interface DetailsButton {
    color: string;
    fontColor: string
}



export const Container = styled.TouchableOpacity<DetailsButton>`
    backgroundColor: ${(props) => props.color};
    width: ${Dimensions.get('window').width/4};
    height: 40%;
    borderRadius: 7px;
    justifyContent: center;
    alignItems: center;
    fontSize: 15px;
    borderColor:  ${(props) => props.fontColor};
    borderWidth: 1px;
    fontFamily: 'Roboto-Bold';
    paddingHorizontal: 5%;
    marginLeft: 2px;
   
`

export const Content = styled.View` 
   

`

export const TextButton = styled.Text<DetailsButton>` 
      color: ${props => props.fontColor};
      textAlign: center;
`