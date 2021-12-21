import React from 'react';
import * as styles from './styles';
import {Ionicons} from '@expo/vector-icons'
import { View } from 'react-native';

interface propsButtonAction {
    title: string;
    color: string;
    event():void;
    fontColor: string;
}

export const ButtonAction = (props: propsButtonAction) => {
    return(
        <styles.Container color={props.color} fontColor={props.fontColor} onPress={props.event}>
            <styles.Content>
                <styles.TextButton color={props.color} fontColor={props.fontColor}>{props.title}
                    {props.title === 'Add to cart' ? (
                    <Ionicons name="cart"/>
                ) : ''}
                </styles.TextButton>
            </styles.Content>
        </styles.Container>
    )
}