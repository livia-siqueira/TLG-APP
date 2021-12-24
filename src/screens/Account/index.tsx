import React, { useCallback, useState } from 'react'
import {Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import * as styles from './styles'
import { Card } from '../../components/Card';
import { AppDispatch, RootState } from '@types';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAsync } from '../../store/User/thunk';
import { colors } from '../../shared/constants/colors';



export const Account : React.FC = () => {
    
    const dispatch : AppDispatch = useDispatch();
    const userActual = useSelector((state: RootState) => state.user.userActual);
    const [inputName, setInputName] = useState<string>(userActual ? userActual.name : '');
    const [inputPassword, setInputPassword] = useState<string>(userActual ? userActual.password : '');
    const [inputEmail, setInputEmail] = useState<string>(userActual ? userActual.email : '');
    const [stateInputs, setStateInputs] = useState<boolean>(false);
   


    const changeTextInputName = (text: string) => {
        setInputName(text)
    }

    const changeTextInputEmail = (text: string) => {
        setInputEmail(text)
    }

    const updateUser = useCallback(() => {
        dispatch(updateUserAsync({email: inputEmail ? inputEmail : '', name: inputName ? inputName : ''}))
    }, [dispatch, inputName, inputPassword, inputEmail])


   const putAlter = useCallback(() => {
       stateInputs === true ? setStateInputs(false) : setStateInputs(true);
   }, [stateInputs, setStateInputs])

    return (
        <Card>
            <styles.Icon onPress={putAlter}>
            <Ionicons name="pencil" size={30} color={colors.colorTextFooterCart}/>
            <styles.Edit>Edit</styles.Edit>
            </styles.Icon>
            <styles.ContainerImage>
        <Ionicons name="person-circle-outline" size={60}/>
        </styles.ContainerImage>
        <styles.Title>{userActual ? userActual.name : ''}</styles.Title>
        <styles.Input placeholder='Name' editable={stateInputs} value={inputName} onChangeText={changeTextInputName}/>
        <styles.Input autoCompleteType="password" editable={stateInputs} placeholder='Email' value={userActual ? userActual.email : inputName} onChangeText={changeTextInputEmail}/>
        <styles.Button onPress={updateUser}>
            <styles.TextButton>Save</styles.TextButton>
        </styles.Button>
        </Card>
    )
}
