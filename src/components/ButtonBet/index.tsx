import React from "react";
import * as styles from './styles'


export const ButtonBet = (props: {title: string}) => {
    return (
        <styles.Container>
            <styles.TextButton>{props.title}</styles.TextButton>
        </styles.Container>
    )
}