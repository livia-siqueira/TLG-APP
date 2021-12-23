import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import controlGame from './Game/index'
import controlUser from './User/index'
import controlCart  from "./Cart";
import controlBet  from "./Bet";

const store = configureStore({
    reducer: {
        game: controlGame,
        user: controlUser,
        cart: controlCart,
        bet: controlBet
    }
})

export default store;