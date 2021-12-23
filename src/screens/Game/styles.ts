import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";


export const Container = styled.View` 
    width: 100%;
    marginVertical: 20px;
    marginHorizontal: 20px;
    flex: 1;
`

export const Title = styled.Text` 
    fontFamily: 'Roboto-BoldItalic';
    fontSize: 22px;
    color: ${colors.colorTextTitle};

`
export const TypeGame = styled.Text` 
    fontFamily: 'Roboto-ThinItalic';
    color: ${colors.colorTextTitle};
   
`
export const PageTitle = styled.View` 
    marginVertical: 20px;
`

export const Button = styled.View`
    flexDirection: row;
    marginVertical: 20px;
`

export const Game = styled.View` 
    marginVertical: 10px;
    width: 100%;
    flex: 1;
`
export const ButtonLeft = styled.View` 
    flexDirection: row;
    marginRight: 25px;
`

export const Description = styled.View` 
    width: 100%;
    marginVertical: 10px;

`
export const ContainerDescription = styled.View`
    width: 80%;
   
`
export const Text = styled.Text`
    textAlign: left;
    color: ${colors.colorTextTitle}
    fontFamily: 'Roboto-BoldItalic';
`

export const TextDescription = styled.Text`
    fontFamily: 'Roboto-ThinItalic'
    textAlign: justify;
    fontSize: 18;
`

export const ContainerGame = styled.View` 
    width: 100%;
    height: 100%;
    flex: 1;
    flexGrow: 1;
`

export const Actions = styled.View` 
    flexDirection: row;

`