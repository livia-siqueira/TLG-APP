import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BetApi, CartAPI } from "@types";
import { controlCart } from "../Cart";

interface AddBetInReducer {
    betsPlaced: BetApi[],
    totalCart: number,
    data: string,
    betsSelected: string[]
}

const initialState : AddBetInReducer= {
    betsPlaced: [],
    betsSelected: [],
    totalCart: 0,
    data: new Date().toString()
}


export const controlBet = createSlice({
    name: 'bet',
    initialState,
    reducers: {
        setBets: (state, action: PayloadAction<BetApi[]>) => {
            state.betsPlaced = action.payload;
        },
        filterGame(state, action: PayloadAction<{ game: string }>) {
            const existingGame = state.betsSelected?.find(
              (game) => game === action.payload.game
            );
            if (existingGame && state.betsSelected) {
              state.betsSelected = state.betsSelected?.filter(
                (game) => game !== action.payload.game
              );
            } else {
              state.betsSelected?.push(action.payload.game);
            }
            return state;
          },
        resetBet: (state) => {
          state.betsPlaced = []
          state.betsSelected = []
        }

    }
})

export const {filterGame, setBets, resetBet} = controlBet.actions;
export default controlBet.reducer;