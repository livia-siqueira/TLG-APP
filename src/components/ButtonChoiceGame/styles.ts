import styled from "styled-components/native";
import {Dimensions} from 'react-native'
import { colors } from "../../shared/constants/colors";

interface propsButton  {
    color: string;
}


export const ContainerButton = styled.TouchableOpacity<propsButton>` 
    borderColor: ${(props) => props.color};
    borderWidth: 2px;
    width: ${Dimensions.get('screen').width/4};
    borderRadius: 12px;
    paddingHorizontal: 12px;
    paddingVertical: 5px;
    marginHorizontal: 10px;
`

export const TextButton = styled.Text<propsButton>` 
    color: ${(props) => props.color};

`

export const Button = styled.View` 


`