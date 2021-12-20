import React, { useEffect, useReducer, useCallback, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { colors } from "../../shared/constants/colors";
import * as styles from "./styles";
import { MainButton } from "../../components/MainButton";
import { ButtonForm } from "../../components/ButtonForm";
import {
  AppDispatch,
  RootAuthStackParamList,
  RootState,
} from "../../shared/types";
import { NavigationStackProp } from "react-navigation-stack";
import { PayloadAction } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { gamesLoads } from "../../store/Game/thunk";
import { loadAsync } from "expo-font";
import { api } from "../../services/api";
import { methodCreateUserAPI } from "../../services/api/User/createUser";
import { creatingUser, loginUserAsync } from "../../store/User/thunk";
interface iHomeProps {
  navigation: NavigationStackProp<any, any>;
}

export const AuthScreen = ({ navigation }: iHomeProps) => {
  const getGames = useCallback(async () => {
    try {
      const a = await dispacth(gamesLoads());
      console.log(a);
    } catch (e: any) {
      console.log("erro");
    }
  }, []);

  useEffect(() => {
    async function a() {
      await getGames();
    }
    a();
  }, [getGames]);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();
  const dispacth: AppDispatch = useDispatch();

  


  const createUser = async () => {
   
    try {
    dispacth(
      creatingUser({
        name: inputName ? inputName : "",
        password: inputPassword ? inputPassword : "",
        email: inputEmail ? inputEmail : "",
      })
    );
    }catch(error: any) {

    }
  };

  const login = async () => {
    try {
      dispacth(loginUserAsync({ password: inputPassword ? inputPassword : "",
      email: inputEmail ? inputEmail : "",}))
      navigation.navigate("Home");
    }catch(error: any) {

    }
  }
  const BackToDefault = () => {
    setIsLogin(false);
    setIsRegister(false);
  };

  const changeTextName = (inputText: string) => {
    setInputName(inputText);
  };

  const changeTextEmail = (inputText: string) => {
    setInputEmail(inputText);
  };

  const changeTextPassword = (inputText: string) => {
    setInputPassword(inputText);
  };

  let TypeTouchable: typeof TouchableOpacity | typeof TouchableNativeFeedback =
    TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TypeTouchable = TouchableNativeFeedback;
  }

  return (
    <styles.Container>
      <styles.Content>
        {!isLogin && !isRegister && (
          <View>
            <styles.Title>
              {`The  \nGreatest \nApp\n`}{" "}
              <styles.TitleDiferent>
                <styles.TextSpecial>for</styles.TextSpecial>
              </styles.TitleDiferent>{" "}
              {`\nLottery`}
            </styles.Title>
            <styles.ContainerButton>
              <MainButton
                changeFormForLogin={() => setIsLogin(false)}
                changeFormForRegister={() => setIsRegister(true)}
                title="Sign Up"
              />
              <MainButton
                changeFormForLogin={() => setIsLogin(true)}
                changeFormForRegister={() => setIsRegister(false)}
                title="Log In"
              />
            </styles.ContainerButton>
          </View>
        )}

        {isLogin ? (
          <View>
            <styles.TitleForm>Authentication</styles.TitleForm>
            <styles.ContainerForm>
              <styles.ContainerInput>
                <styles.Input
                  placeholder="Name"
                  value={inputName}
                  onChangeText={changeTextName}
                />
                <styles.Input placeholder="Password" value={inputPassword} />
                <styles.ContainerButton>
                  <ButtonForm title="Log In" eventClick={login} />
                </styles.ContainerButton>
              </styles.ContainerInput>
            </styles.ContainerForm>
            <styles.ContainerButton>
              <ButtonForm title="Back" eventClick={BackToDefault} />
            </styles.ContainerButton>
          </View>
        ) : (
          isRegister && (
            <View>
              <styles.TitleForm>Register</styles.TitleForm>
              <styles.ContainerForm>
                <View>
                  <styles.Input
                    placeholder="Name"
                    value={inputName}
                    onChangeText={changeTextName}
                  />
                  <styles.Input
                    placeholder="Email"
                    value={inputEmail}
                    onChangeText={changeTextEmail}
                  />
                  <styles.Input
                    placeholder="Password"
                    value={inputPassword}
                    onChangeText={changeTextPassword}
                  />
                  <styles.ContainerButton>
                    <ButtonForm title="Register" eventClick={createUser} />
                    <ButtonForm title="Back" eventClick={BackToDefault} />
                  </styles.ContainerButton>
                </View>
              </styles.ContainerForm>
            </View>
          )
        )}
      </styles.Content>
    </styles.Container>
  );
};
