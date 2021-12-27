import React from "react";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as styles from "./styles";
import { Card } from "@components";
import { useDispatch, useSelector, useCallback, useState } from "@shared";
import { updateUserAsync } from "../../store/Slices/User/thunk";
import {colors, AppDispatch, RootState} from "@shared";

export const Account: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const userActual = useSelector((state: RootState) => state.user.userActual);
  const [inputName, setInputName] = useState<string>(
    userActual ? userActual.name : ""
  );
  const [inputEmail, setInputEmail] = useState<string>(
    userActual ? userActual.email : ""
  );
  const [stateInputs, setStateInputs] = useState<boolean>(false);

  const changeTextInputName = (text: string) => {
    setInputName(text);
  };

  const changeTextInputEmail = (text: string) => {
    setInputEmail(text);
  };

  const updateUser = useCallback(async () => {
    const a = await dispatch(
      updateUserAsync({
        email: inputEmail ? inputEmail : "",
        name: inputName ? inputName : "",
      })
    );
    if (a.meta.requestStatus === "fulfilled") {
      return Alert.alert("Sucess!", "Changes made successfully.");
    } else {
      return Alert.alert(
        "Err!",
        "There was a problem, please try again. Correct format for email: [xx...]@[xxxx...].[xxx]"
      );
    }
  }, [dispatch, inputName, inputEmail]);

  const putAlter = useCallback(() => {
    stateInputs === true ? setStateInputs(false) : setStateInputs(true);
  }, [stateInputs, setStateInputs]);

  return (
    <Card>
      <styles.Icon onPress={putAlter}>
        <Ionicons name="pencil" size={30} color={colors.colorTextFooterCart} />
        <styles.Edit>Edit</styles.Edit>
      </styles.Icon>
      <styles.ContainerImage>
        <Ionicons name="person-circle-outline" size={60} />
      </styles.ContainerImage>
      <styles.Title>{inputName}</styles.Title>
      <styles.Input
        placeholder="Name"
        editable={stateInputs}
        value={inputName}
        onChangeText={changeTextInputName}
      />
      <styles.Input
        editable={stateInputs}
        placeholder="Email"
        value={inputEmail}
        onChangeText={changeTextInputEmail}
      />
      <styles.Button onPress={updateUser} delayPressIn={7}>
        <styles.TextButton>Save</styles.TextButton>
      </styles.Button>
    </Card>
  );
};
