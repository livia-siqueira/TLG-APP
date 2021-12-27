import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@shared";
import { filterGame, setBets } from ".";
import { getBet } from "../../../services/api/Cart/getBet";


export const getBetAsync = createAsyncThunk<void, string[], {
    dispatch: AppDispatch;
    state: RootState;
}>(
    'bet/getBets',
    async(types, thunkAPI) => {
        const data = await getBet(types);
        thunkAPI.dispatch(setBets(data));
    }
)