import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, ApiUser, SliceUser, Bet} from '../../shared/types/';
import { loginUserAsync } from "./thunk";

const initialState : SliceUser = {
    users: [],
    userActual: null
}

const controlUser = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: (state, action : PayloadAction<User>) => {
            state.users.push(action.payload)
            return state;
        },
        loginUser: (state, action:PayloadAction<{user: User}>) => {
            console.log(action.payload.user)
            const hasUser = state.users.find(user => user.id === action.payload.user.id);
            if(!hasUser) {
                state.users.push(action.payload.user)
            }
            console.log(action.payload.user)
            state.userActual = action.payload.user;
            return state;
        },
        addBetInUser: (state, action:PayloadAction<Bet>) => {
            const userGame = state.users.find((user) => 
                user.id === action.payload.user_id
            )
            userGame?.bets.push(action.payload)
            return state;
        },
        setUser: (state, action:PayloadAction<User>) => {
            state.userActual = action.payload;
            return state;
        },
        logoutUser: (state) => {
            state.userActual = null;
        }
    }
})


export const {logoutUser, createUser, loginUser, setUser, addBetInUser} = controlUser.actions;
export default controlUser.reducer; 