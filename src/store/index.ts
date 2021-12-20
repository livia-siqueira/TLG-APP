import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import controlGame from './Game/index'
import controlUser from './User/index'

const store = configureStore({
    reducer: {
        game: controlGame,
        user: controlUser
    }
})

export default store;