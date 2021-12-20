import React from 'react'
import { Button, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { RootState } from '../../shared/types'
import * as styles from './styles'



export const Home = () => {
    const userActualBets = useSelector((state: RootState) => state.user.userActual)
    const games = useSelector((state: RootState) => state.game.games);
    console.log(games)
    const cart = [1, 2,3]
    return(
        <styles.Container>
           <Text>recent games</Text>
         {cart.map((item) =>   
             <Button title='test' onPress={() => {}}/>
         )}
           <FlatList data={userActualBets?.bets} renderItem={item => <Text>{item}</Text>}/>
        </styles.Container>
    )
}