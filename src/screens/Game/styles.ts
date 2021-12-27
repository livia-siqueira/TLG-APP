import styled from "styled-components/native";
import { colors } from "../../shared/constants/colors";

export const Container = styled.View`
  width: 100%;
  margin-vertical: 10px;
  margin-horizontal: 20px;
  flex: 1;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: "Roboto-BoldItalic";
  font-size: 22px;
  color: ${colors.colorTextTitle};
`;
export const TypeGame = styled.Text`
  font-family: "Roboto-ThinItalic";
  color: ${colors.colorTextTitle};
`;
export const PageTitle = styled.View`
  margin-vertical: 20px;
`;

export const Button = styled.View`
  flex-direction: row;
  margin-vertical: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Game = styled.View`
  margin-vertical: 10px;
  width: 100%;
  flex: 1;
`;
export const ButtonLeft = styled.View`
  flex-direction: row;
`;

export const Description = styled.View`
  width: 100%;
  margin-vertical: 10px;
`;
export const ContainerDescription = styled.View`
  width: 80%;
`;
export const Text = styled.Text`
    text-align: left;
    color: ${colors.colorTextTitle}
    font-family: 'Roboto-BoldItalic';
`;

export const TextDescription = styled.Text`
    font-family: 'Roboto-ThinItalic'
    text-align: justify;
    font-size: 18;
`;

export const ContainerGame = styled.View`
  width: 100%;
  flex: 1;
`;

export const Actions = styled.View`
  flex-direction: row;
`;
