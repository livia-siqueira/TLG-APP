import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;



export const TextButton = styled.Text`
    color: ${colors.colorWhite};
`

export const Title = styled.Text`
  font-size: 50px;
  color: ${colors.colorTextTitle};
  text-align: center;
  line-height: 82px;
  font-family: "Roboto-BoldItalic";
`;

export const TitleDiferent = styled.View`
  background-color: ${colors.colorDetailsGreen};
  color: ${colors.colorWhite};
  border-radius: 70px;
  padding-horizontal: 20px;
`;

export const ContainerTitleForm = styled.View`
    fontSize: 20px;
`

export const TitleForm = styled.Text`
    textAlign: center;
    fontSize: 28px;
    color: ${colors.colorTextTitle};
    fontFamily: 'Roboto-BoldItalic';
    marginVertical: 20px;
`

export const ContainerButton = styled.View`
  marginVertical: 30px;
  width: 380px;
`;

export const TextPassword = styled.TouchableOpacity`
  margin: 20px;`

export const Text = styled.Text`
  font-size: 18px;
  color: ${colors.colorText};
  font-family: 'Roboto-ThinItalic';
  text-align: right;
`
export const TextSpecial = styled.Text`
  font-size: 50px;
  color: ${colors.colorWhite};
  font-family: "Roboto-BoldItalic";
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.colorPrimary};
`;

export const ContainerForm = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.colorWhite};
  border-radius: 20px;
  border: 1px solid ${colors.colorBorderForm};
  height: 60%;
  width: 380px;
`;

export const ContainerInput = styled.View`
`

export const Input = styled.TextInput`
    width: 380px;
    padding: 12px;
    font-size: 20px;
    height: 70px;
    border-bottom-color: ${colors.colorBorderBottomHeader};
    border-bottom-width: 1px;
`
