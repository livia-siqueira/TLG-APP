import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Bet } from "@types"

interface state {
    bets: Bet[];
    totalCart: number;
}

const initialState : state = {
    bets: [],
    totalCart: 0
}

export const controlCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBetCart: (state, action : PayloadAction<Bet>) => {
            state.bets.push(action.payload)
            state.totalCart += action.payload.price;
            return state;
        }
    }

})

export const {addBetCart} = controlCart.actions;
export default controlCart.reducer;