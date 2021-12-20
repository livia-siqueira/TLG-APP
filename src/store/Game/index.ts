import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GamesRules } from "../../shared/types";
import { gamesLoads } from "./thunk";

type initial = {
    games: GamesRules[],
    gameActual: Game | null
}


const initialState : initial = {
    games: [],
    gameActual: null
}

const controlGame = createSlice({
    name: 'games',
    initialState: initialState,
    reducers: {
    }, 
    extraReducers: (builder) => {
        builder.addCase(gamesLoads.fulfilled, (state, action) =>{
            for(let i = 0; i< action.payload.types.length; i++){
                state.games.push(action.payload.types[i])
            }
            state.gameActual = action.payload.types[0]
            return state;
        })
    }
})

export default controlGame.reducer