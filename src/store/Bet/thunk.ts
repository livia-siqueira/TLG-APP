import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@types";
import { filterGame, setBets } from ".";
import { api } from "../../services/api";
import { getBet } from "../../services/api/Cart/getBet";


export const getBetAsync = createAsyncThunk<void, string[], {
    dispatch: AppDispatch;
    state: RootState;
}>(
    'bet/getBets',
    async(types, thunkAPI) => {
        console.log(types)
        const data = await getBet(types);
        console.log(data)
        thunkAPI.dispatch(setBets(data));
    }
)