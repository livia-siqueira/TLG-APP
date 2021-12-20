import React from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { RootState } from '../../shared/types'
import * as styles from './styles'



export const Home = () => {
    const userActualBets = useSelector((state: RootState) => state.user.userActual)
    return(
        <styles.Container>
           <Text>recent games</Text>
           <FlatList data={userActualBets?.bets} renderItem={item => <Text>{item}</Text>}/>
        </styles.Container>
    )
}

Home.navigationOptions = () => {
    return {
        headerTitle: 'TLG',
    };  
}