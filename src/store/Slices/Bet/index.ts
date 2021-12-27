import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BetAPI, CartAPI } from "@shared";

interface AddBetInReducer {
    betsPlaced: BetAPI[],
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


const controlBet = createSlice({
    name: 'bet',
    initialState,
    reducers: {
        setBets: (state, action: PayloadAction<BetAPI[]>) => {
            state.betsPlaced = action.payload;
            return state;
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