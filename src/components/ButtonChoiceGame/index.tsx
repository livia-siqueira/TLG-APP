import React from "react";
import * as styles from './styles'

interface propsButton {
    title: string,
    color: string,
    event(title: string):void,
    isAtive: boolean
}


export const ButtonChoiceGame = (props : propsButton) => {
    return (
        <styles.ContainerButton isAtive={props.isAtive}  color={props.color} onPress={props.event.bind(this, props.title)}>
            <styles.Button>
                <styles.TextButton isAtive={props.isAtive} color={props.color}>{props.title}</styles.TextButton>
            </styles.Button>
        </styles.ContainerButton>
    )
}

