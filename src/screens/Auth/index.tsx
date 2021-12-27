import React, {useCallback, useState } from "react";
import { Alert, View} from "react-native";
import * as styles from "./styles";
import { ButtonForm, MainButton } from "@components";
import { AppDispatch, RootState } from "@types";
import { NavigationStackProp } from "react-navigation-stack";
import { useDispatch} from "react-redux";
import { creatingUser, loginUserAsync } from "../../store/User/thunk";
import { Modal } from "../../components/ModalResetPassword";

interface iHomeProps {
  navigation: NavigationStackProp<any, any>;
}

export const AuthScreen = ({ navigation }: iHomeProps) => {

  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const dispacth: AppDispatch = useDispatch();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();

  const handleModalEvent = useCallback(() => {
    modalStatus ? setModalStatus(false) : setModalStatus(true);
  }, [setModalStatus, modalStatus]);

  const createUser = async () => {
    if (inputEmail?.trim() && inputName?.trim() && inputPassword?.trim) {
      try {
        const resp = await dispacth(
          creatingUser({
            name: inputName ? inputName : "",
            password: inputPassword ? inputPassword : "",
            email: inputEmail ? inputEmail : "",
          })
        );

        if (resp.meta.requestStatus === "rejected") {
          console.log(resp);
        }
      } catch (error: any) {
        console.log(error);
      }
    } else {
      return Alert.alert("Failed Register", "Fiels empty", [
        {
          text: "Ok",
        },
      ]);
    }
  };

  const login = async () => {
    try {
      const resp = await dispacth(
        loginUserAsync({
          password: inputPassword ? inputPassword : "",
          email: inputEmail ? inputEmail : "",
        })
      );
      if (resp.payload) {
        resetFields();
      } else {
        if (!inputEmail?.trim() || !inputPassword?.trim()) {
          return Alert.alert("Failed Login", "Fiels empty", [
            {
              text: "Ok",
            },
          ]);
        }
        return Alert.alert(
          "Failed Login",
          "User does not exist. Please register on our system and start betting!",
          [
            {
              text: "Ok",
            },
          ]
        );
      }
    } catch (error: any) {
      throw new Error(error);
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
                changeFormForLogin={() => setIsLogin(true)}
                changeFormForRegister={() => setIsRegister(false)}
                title="Log In"
              />
              <MainButton
                changeFormForLogin={() => setIsLogin(false)}
                changeFormForRegister={() => setIsRegister(true)}
                title="Sign Up"
              />
            </styles.ContainerButton>
          </View>
        )}
        {isLogin ? (
          <View>
            <View style={{ opacity: modalStatus ? 0.2 : 1 }}>
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
                  <styles.TextPassword onPress={handleModalEvent}>
                    <styles.Text>I forget my password</styles.Text>
                  </styles.TextPassword>
                  <styles.ContainerButton>
                    <ButtonForm title="Log In" eventClick={login} />
                  </styles.ContainerButton>
                </styles.ContainerInput>
              </styles.ContainerForm>
              <styles.ContainerButton>
                <ButtonForm title="Back" eventClick={BackToDefault} />
              </styles.ContainerButton>
            </View>
            {modalStatus && <Modal eventBackPage={handleModalEvent} />}
          </View>
        ) : (
          isRegister && (
            <View>
              <styles.TitleForm>Registration</styles.TitleForm>
              <styles.ContainerForm style={{ height: 400 }}>
                <styles.ContainerInput>
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
                  </styles.ContainerButton>
                </styles.ContainerInput>
              </styles.ContainerForm>
              <styles.ContainerButton>
                <ButtonForm title="Back" eventClick={BackToDefault} />
              </styles.ContainerButton>
            </View>
          )
        )}
      </styles.Content>
      <styles.Footer>
        <styles.FooterText>@Copyright 2021 Luby Software</styles.FooterText>
      </styles.Footer>
    </styles.Container>
  );
};
