import {useDispatch} from 'react-redux'
import {createAsyncThunk} from '@reduxjs/toolkit'
import { gamesFetch } from '../../services/api/Game/getGames'


export const gamesLoads = createAsyncThunk(
    '@fetchGames', 
    async () => {
       try {
         const data = await gamesFetch();
         return data;
       } catch (e: any) {
         throw new Error(e.message);
       }
    }
 )