import { configureStore } from "@reduxjs/toolkit";
import controlGame from './Slices/Game';
import controlUser from './Slices/User';
import controlBet from './Slices/Bet';
import controlCart from './Slices/Cart';
const store = configureStore({
    reducer: {
        game: controlGame,
        user: controlUser,
        cart: controlCart,
        bet: controlBet
    }
})

export default store;