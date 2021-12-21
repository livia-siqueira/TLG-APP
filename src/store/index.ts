import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import controlGame from './Game/index'
import controlUser from './User/index'
import controlCart  from "./Cart";

const store = configureStore({
    reducer: {
        game: controlGame,
        user: controlUser,
        cart: controlCart
    }
})

export default store;