import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../shared/constants";

export const Container = styled.ScrollView`
  width:  ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height / 2}px;
`;

export const TextButton = styled.Text`
  color: ${colors.colorWhite};
`;

export const ContainerTitleForm = styled.View`
  font-size: 20px;
`;

export const TitleForm = styled.Text`
  text-align: center;
  font-size: 28px;
  color: ${colors.colorTextTitle};
  font-family: "Roboto-BoldItalic";
  margin-vertical: 20px;
`;

export const ContainerButton = styled.View`
  width: 300px;
  margin-vertical: 30px;
  justify-content: center;
  align-items: center;
`;

export const TextPassword = styled.TouchableOpacity`
  margin: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.colorText};
  font-family: "Roboto-ThinItalic";
  text-align: right;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

export const Footer = styled.View`
  width: ${Dimensions.get('window').width}px;
  margin-top: 120px;
  height: 50px;
  border-top-width: 1px;
  border-top-color: ${colors.colorBorderCart};
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.Text`
  color: ${colors.colorTextTitle};
  text-align: center;
`;

export const ContainerForm = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.colorWhite};
  border-radius: 20px;
  border: 1px solid ${colors.colorBorderForm};
  height: 300px;
  width: 300px;
`;

export const ContainerInput = styled.View`
  width: 300px;
`;

export const Input = styled.TextInput`
  width: 300px;
  padding: 12px;
  font-size: 20px;
  height: 70px;
  border-bottom-color: ${colors.colorBorderBottomHeader};
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${colors.colorTextTitle};
  text-align: center;
  font-family: "Roboto-BoldItalic";
`;

export const TitleDiferent = styled.View`
  background-color: ${colors.colorDetailsGreen};
  color: ${colors.colorWhite};
  border-radius: 70px;
  padding-horizontal: 10px;
`;

export const TextSpecial = styled.Text`
  font-size: 50px;
  color: ${colors.colorWhite};
  font-family: "Roboto-BoldItalic";
`;
