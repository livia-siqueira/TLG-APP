import React, { useCallback, useEffect } from 'react'
import { Button, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonChoiceGame } from '../../components/ButtonChoiceGame'
import { ItemBet } from '../../components/ItemBet'
import { getBet } from '../../services/api/Cart/getBet'
import { AppDispatch, RootState } from '../../shared/types'
import { filterGame, setBets } from '../../store/Bet'
import { getBetAsync } from '../../store/Bet/thunk'
import * as styles from './styles'



export const Home : React.FC = () => {
    const userActualBets = useSelector((state: RootState) => state.user.userActual)
    const games = useSelector((state: RootState) => state.game.games);
    const betPlaced = useSelector((state: RootState) => state.bet.betsPlaced);
    const gamesOnFilter = useSelector((state: RootState) => state.bet.betsSelected);
    
    const dispatch : AppDispatch = useDispatch();
   
    const gamesJust = userActualBets?.bets.map((game) => {
        return game.game_id;
    })

    const handleBets = useCallback(async() => {
        try {
            await dispatch(getBetAsync(gamesOnFilter));
          } catch (e: any) {
          console.log(`falhou`)
          }
    }, [gamesOnFilter])

    useEffect(() => {
        handleBets();
    }, [gamesOnFilter, handleBets] )

    let gamesUser : string[] = [];
    const gamesOfUser = games.filter((game) => {
        if(gamesJust?.includes(game.id)) {
            gamesUser.push(game.type)
        }
        return gamesJust?.includes(game.id) && game.type;
    } )

    const filteredGame = (type: string) => {
       dispatch(filterGame({game: type}))
    }
   
    return(
        <styles.Container>
          <styles.Buttons>
         {gamesOfUser.map((item) => {  
            const isAtive = gamesOnFilter.includes(item.type)
            return <ButtonChoiceGame isAtive={isAtive} color={item.color} title={item.type} event={filteredGame}/>
})}
         </styles.Buttons>
        <styles.Title>RECENT GAMES</styles.Title>
        <FlatList data={betPlaced} renderItem={(item) => {
            const gameBet = games.find(
              (gam) => {
                  return gam.id === item.item.game_id
                }
            );
            return (
              <ItemBet
                type={gameBet ? gameBet.type : ''}
                color={gameBet ? gameBet.color : ''}
                numbers={item.item.choosen_numbers}
                price={item.item.price}
                data={item.item.created_at}
              />
            );
          }}
        />
        </styles.Container>
    )
         }