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
  fontSize: 50px;
  color: ${colors.colorTextTitle};
  textAlign: center;
  lineHeight: 82px;
  fontFamily: "Roboto-BoldItalic";
`;

export const TitleDiferent = styled.View`
  backgroundColor: ${colors.colorDetailsGreen};
  color: ${colors.colorWhite};
  borderRadius: 70px;
  paddingHorizontal: 20px;
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
export const TextSpecial = styled.Text`
  fontSize: 50px;
  color: ${colors.colorWhite};
  fontFamily: "Roboto-BoldItalic";
`;

export const Content = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${colors.colorPrimary};
`;

export const ContainerForm = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${colors.colorWhite};
  borderRadius: 20px;
  border: 1px solid ${colors.colorBorderForm};
  height: 60%;
  width: 380px;
`;

export const ContainerInput = styled.View`
`

export const Input = styled.TextInput`
    width: 380px;
    paddingHorizontal: 12px;
    fontSize: 20px;
    height: 70px;
    borderBottomColor: ${colors.colorBorderBottomHeader};
    borderBottomWidth: 1px;
`
