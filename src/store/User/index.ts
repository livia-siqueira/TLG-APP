import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, ApiUser, SliceUser, Bet} from '../../shared/types/';

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
        loginUser: (state, action:PayloadAction<{email: string, id: number}>) => {
            const hasUser = state.users.find(user => user.id === action.payload.id);
            if(hasUser) {
                state.userActual = hasUser;
            }
            return state;
        },
        addBetInUser: (state, action:PayloadAction<Bet>) => {
            const userGame = state.users.find((user) => 
                user.id === action.payload.idUser
            )
            userGame?.bets.push(action.payload)
            return state;
        }
    }
})


export const {createUser, loginUser, addBetInUser} = controlUser.actions;
export default controlUser.reducer; 