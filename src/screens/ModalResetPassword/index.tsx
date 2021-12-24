import React, { useCallback, useState } from "react";
import { View, Text, Alert } from "react-native";
import { getUser } from "../../services/api/User/getUser";
import { resetPassword } from "../../services/api/User/resetPassword";
import * as styles from './styles';
import {changePassword} from '../../services/api/User/changePassword'

interface modal {
    eventBackPage() : void;
}

export const Modal = (props: modal) => {
    const [inputEmail, setInputEmail] = useState<string>();
    const [inputPassword, setInputPassword] = useState<string>();
    const [hasUser, setHasUser] = useState<boolean>(false);
    

    const resetPass = useCallback(async() => {
        const resp =  await resetPassword({email: inputEmail ? inputEmail : ''})
        console.log(inputEmail);
        if(resp?.data) {
          setHasUser(true);
        }
     if(inputPassword) {
         const respChange = await changePassword({token: resp?.data.token, newPassword: { password: inputPassword ? inputPassword : ''}})
         if(respChange?.status === 200) {
             Alert.alert("Reset Password", "Your password has been changed successfully", [
                 {
                     text: 'Ok',
                     onPress: props.eventBackPage
                 }
             ])
         }
     }
       }, [setHasUser, hasUser, setInputEmail, inputEmail, setInputPassword, inputPassword])
     
    

    const changeTextInputEmail = (text: string) => {
        setInputEmail(text);
    }
    
    const changeTextInputPassword = (text: string) => {
        setInputPassword(text);
    }

    return (
        <styles.Container>
            <styles.Title>Reset password</styles.Title>
            <styles.Input placeholder="Email" onChangeText={changeTextInputEmail} value={inputEmail}/>
            {hasUser && <styles.Input placeholder="New Password" onChangeText={changeTextInputPassword} value={inputPassword}/>}
            <styles.Buttons>
            <styles.Button onPress={resetPass}>
                <styles.TextButton>Reset Password</styles.TextButton>
            </styles.Button>
            <styles.Button onPress={props.eventBackPage}>
                <styles.TextButton>Back</styles.TextButton>
            </styles.Button>
            </styles.Buttons>
        </styles.Container>
    )
}