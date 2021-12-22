import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, CartAPI, RootState } from "@types";
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
        const addApi = bet
        const data = await methodCreateBetAPI({games: bet})
        console.log(data)
    }
)