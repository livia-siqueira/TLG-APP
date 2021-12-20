import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, loginUser } from ".";
import { methodCreateUserAPI } from "../../services/api/User/createUser";
import { loginUserAPI } from "../../services/api/User/LoginUser";
import { AppDispatch, Game, RootState, User } from "../../shared/types";

export const creatingUser = createAsyncThunk<
  void,
  { email: string, password: string, name: string},
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("user/createUser", async (user, thunkAPI) => {
  const newUser = {
    email: user.email,
    name: user.name,
    password: user.password,
  };
  const data = await methodCreateUserAPI(newUser)
  if(data) {
    thunkAPI.dispatch(createUser(data.user))
  }
  
});

export const loginUserAsync = createAsyncThunk<
  void,
  { email: string, password: string},
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("user/loginUser", async (user, thunkAPI) => {
  const data = await loginUserAPI({email: user.email, password: user.password})
  console.log(data)
  thunkAPI.dispatch(loginUser({email: data.user.email, id: data.user.id}))
});

