import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import * as styles from './styles'

interface Button {
    changeFormForLogin() : void,
    changeFormForRegister() : void,
    title: string
}

export const MainButton = ({changeFormForLogin, title, changeFormForRegister}: Button) => {
    return <TouchableOpacity
        activeOpacity={0.6}
        onPress={title === 'Log In' ? changeFormForLogin : changeFormForRegister}
      >
        <styles.Button>
        <styles.TextButton>{title}</styles.TextButton>
        </styles.Button>
      </TouchableOpacity>
}


