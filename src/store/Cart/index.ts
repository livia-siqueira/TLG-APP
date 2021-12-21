import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Bet } from "@types"



const initialState = {
    cart: [],
    totalCart: 0
}

export const controlCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBetInCart: (state, action : PayloadAction<{bets: Bet[], totalPrice: number}>) => {
            
        }
    }

})