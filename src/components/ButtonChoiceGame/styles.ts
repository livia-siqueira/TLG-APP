import styled from "styled-components/native";
import {Dimensions} from 'react-native'
import { colors } from "../../shared/constants/colors";
import { color } from "react-native-reanimated";

interface propsButton  {
    color: string;
    isAtive: boolean;
}


export const ContainerButton = styled.TouchableOpacity<propsButton>` 
    borderColor: ${(props) => props.color};
    borderWidth: 2px;
    width: ${Dimensions.get('screen').width/4};
    borderRadius: 12px;
    paddingHorizontal: 12px;
    paddingVertical: 5px;
    marginHorizontal: 10px;
    backgroundColor: ${(props) => props.isAtive ? props.color : 'white'};
`

export const TextButton = styled.Text<propsButton>` 
    color:  ${(props) => props.isAtive ? 'white' : props.color };
    fontSize: 15px;

`

export const Button = styled.View` 


`