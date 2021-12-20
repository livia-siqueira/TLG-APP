import React from "react";
import {TouchableOpacity, View, Text} from 'react-native';
import * as styles from './styles'

interface propsButton {
    title: string,
    color: string,
    event(title: string):void
}


export const ButtonChoiceGame = (props : propsButton) => {
    return (
        <styles.ContainerButton color={props.color} onPress={props.event.bind(this, props.title)}>
            <styles.Button>
                <styles.TextButton color={props.color}>{props.title}</styles.TextButton>
            </styles.Button>
        </styles.ContainerButton>
    )
}

