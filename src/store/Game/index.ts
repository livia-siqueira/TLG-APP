import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GamesRules } from "../../shared/types";
import { gamesLoads } from "./thunk";

type initial = {
    games: Game[],
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
        changeGameSelected: (state, action : PayloadAction<string> ) => {
            const gameSelect = state.games.find((item) => 
               item.type === action.payload
            )
            state.gameActual = gameSelect ? gameSelect : null;
            return state;
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(gamesLoads.fulfilled, (state, action) =>{
            for(let i = 0; i< action.payload.types.length; i++){
                console.log(state.games.find((ga) => ga.id === action.payload.types[i].id))
                const hasGame = state.games.find((ga) => ga.id === action.payload.types[i].id);
                if(!hasGame){
                    state.games.push(action.payload.types[i])
                }
            }
            state.gameActual = action.payload.types[0]
            return state;
        })
    }
})

export default controlGame.reducer;
export const {changeGameSelected} = controlGame.actions;