import React, { useCallback, useEffect } from 'react'
import { Button, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { ButtonChoiceGame } from '../../components/ButtonChoiceGame'
import { getBet } from '../../services/api/Cart/getBet'
import { RootState } from '../../shared/types'
import * as styles from './styles'



export const Home = () => {
    const userActualBets = useSelector((state: RootState) => state.user.userActual)
    const games = useSelector((state: RootState) => state.game.games);
    const gameActual = useSelector((state: RootState) => state.game.gameActual);
    console.log(userActualBets)

    const allBets = getBet();

    const renderGame = useCallback(() => {
        <FlatList data={userActualBets?.bets} renderItem={item => <Text>{item}</Text>}/>
    }, [gameActual])
    
    return(
        <styles.Container>
           <styles.Buttons>
         {games.map((item) =>   
             <ButtonChoiceGame isAtive={false}color={item.color} title={item.type} event={() => {}}/>
         )}
         </styles.Buttons>
         <styles.Title>RECENT GAMES</styles.Title>
          {renderGame()}
        </styles.Container>
    )
}