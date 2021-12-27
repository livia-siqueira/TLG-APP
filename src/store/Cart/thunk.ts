import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../shared/helpers/types/Game";
import {CartAPI} from '../../shared/helpers/types/API';
import { methodCreateBetAPI } from "../../services/api/Cart/addBetInCart";


export const addBetInCartAsync = createAsyncThunk<
void,
  CartAPI[],
  {
    dispatch: AppDispatch;
    state: RootState;
  }>(
    'addBetInCart',
    async (bet, thunkAPI) => {
       const data = await methodCreateBetAPI({games: bet})
       return data;
    }
)