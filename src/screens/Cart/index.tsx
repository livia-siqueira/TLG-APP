import { RootState } from "@types";
import React from "react";
import {View, Text} from 'react-native'
import { useSelector } from "react-redux";


export const Cart = () => {
    const userLogged = useSelector((state: RootState) => state.user.userActual)
    const cartUser = useSelector((state: RootState) => state.cart.bets)
    const betsOfUser = cartUser.filter((bet) => {
        bet.idUser === userLogged?.id
    })
    console.log(cartUser);
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}