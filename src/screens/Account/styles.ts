import { Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import styled from "styled-components/native";
import { colors } from "../../shared/constants";

export const Container = styled.View`
  width: 300px;
  background-color: ${colors.colorWhite};
  border-radius: 12px;
  border-color: ${colors.colorBorderCart};
  border-width: 1px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-horizontal: 20px;
  margin-vertical: 100px;
`;

export const ContainerImage = styled.View``;

export const Title = styled.Text`
  font-size: 22px;
  margin-vertical: 20px;
`;
export const Input = styled.TextInput`
  border-bottom-color: ${colors.colorBorder};
  border-bottom-width: 1px;
  width: 300px;
  margin-vertical: 20px;
  height: 50px;
`;
export const Button = styled.TouchableOpacity`
  width: ${Dimensions.get("screen").width};
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  font-family: "Roboto-BoldItalic";
  font-size: 50px;
  color: ${colors.colorTextFooterCart};
`;
export const Icon = styled.TouchableOpacity`
  margin-vertical: 0px;
  left: 150px;
`;
export const Edit = styled.Text`
  font-family: "Roboto-BoldItalic";
  font-size: 15px;
  color: ${colors.colorTextFooterCart};
`;
