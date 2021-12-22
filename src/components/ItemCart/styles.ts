import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";


export const Container = styled.View<{color: string}>` 
    borderLeftWidth: 4px;
    borderRadius: 4px;
    borderLeftColor: ${props => props.color};
    marginHorizontal: 10px;
    height: 60px;

`

export const Card = styled.View`
 flexDirection: row;
 alignItems: center;
 marginHorizontal: 10px;
 marginVertical: 10px;
`
export const Content = styled.View` 
    marginHorizontal: 10px;

`
export const Details = styled.View` 
    flexDirection: row;
    marginVertical: 10px;
`
export const Numbers = styled.Text`
    fontSize: 18px;
    fontFamily: 'Roboto-ThinItalic';
    color: ${colors.colorTextTitle};
`
export const Title = styled.Text<{color: string}>` 
    fontSize: 20px;
    color: ${props => props.color};
    fontFamily: 'Roboto-BoldItalic';
`

export const Price = styled.Text` 
    marginHorizontal: 8%;
    fontFamily: 'Roboto-ThinItalic';
    color: ${colors.colorTextTitle}
    fontSize: 20px;

`