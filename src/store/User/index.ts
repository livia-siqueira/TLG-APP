import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, ApiUser, SliceUser} from '../../shared/types/';

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
        }
    }
})


export const {createUser, loginUser} = controlUser.actions;
export default controlUser.reducer; 