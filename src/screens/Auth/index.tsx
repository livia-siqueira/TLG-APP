import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import * as styles from "./styles";
import { MainButton, ButtonForm } from "@components";
import { AppDispatch, RootState } from "@types";
import { NavigationStackProp } from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import { gamesLoads } from "../../store/Game/thunk";
import {
  creatingUser,
  getUserAsync,
  loginUserAsync,
} from "../../store/User/thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface iHomeProps {
  navigation: NavigationStackProp<any, any>;
}

export const AuthScreen = ({ navigation }: iHomeProps) => {
  const [Loading, setLoading] = useState<boolean>(false);
  const dispacth: AppDispatch = useDispatch();
  const getGames = useCallback(async () => {
    try {
      await dispacth(gamesLoads());
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
  const userActual = useSelector((state: RootState) => state.user.userActual);
  const createUser = async () => {
    try {
      dispacth(
        creatingUser({
          name: inputName ? inputName : "",
          password: inputPassword ? inputPassword : "",
          email: inputEmail ? inputEmail : "",
        })
      );
      resetFields();
    } catch (error: any) {}
  };

  const loadUser = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        await dispacth(getUserAsync(token));
      }
      resetFields();
    } catch (e: any) {
      console.log("erooo");
    }
  }, []);

  const login = async () => {
    try {
      setLoading(true);
      await dispacth(
        loginUserAsync({
          password: inputPassword ? inputPassword : "",
          email: inputEmail ? inputEmail : "",
        })
      );
      loadUser();
      if (userActual) {
        resetFields();
        return navigation.navigate("App");
      }
      console.log("usuário nao existe");
    } catch (error: any) {
      setLoading(false);
      console.log("erro credenciais");
    }
  };
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

  const resetFields = () => {
    setInputEmail("");
    setInputName("");
    setInputPassword("");
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
                  placeholder="Email"
                  value={inputEmail}
                  onChangeText={changeTextEmail}
                />
                <styles.Input
                  autoCompleteType="password"
                  placeholder="Password"
                  value={inputPassword}
                  onChangeText={changeTextPassword}
                />
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
                    autoCompleteType="password"
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
