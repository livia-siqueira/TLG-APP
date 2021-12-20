import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";


export const Container = styled.View`
    marginVertical: 30px;
    marginHorizontal: 20px;
    width: 90%;
`

export const Buttons = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
`

export const Title = styled.Text`
    fontFamily: 'Roboto-BoldItalic';
    fontSize: 22px;
    color: ${colors.colorTextTitle};
    textAlign: left;
    marginVertical: 20px;
`