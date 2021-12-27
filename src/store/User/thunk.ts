import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, loginUser, setUser } from ".";
import { methodCreateUserAPI } from "../../services/api/User/createUser";
import { getUser } from "../../services/api/User/getUser";
import { loginUserAPI } from "../../services/api/User/LoginUser";
import updateAccount from "../../services/api/User/updateAccount";
import { AppDispatch, RootState } from "../../shared/helpers/types/Game";

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
  const userLogged = await loginUserAPI({email: user.email, password: user.password})
  if(userLogged) {
    thunkAPI.dispatch(loginUser({user: userLogged.user}))
  }
  return userLogged;
});

export const getUserAsync = createAsyncThunk<void,
string,
{
  dispatch: AppDispatch;
  state: RootState;
}>(
  "user/getUser", async (token, thunkAPI) => {
    const data  = await getUser();
    if(data) {
      thunkAPI.dispatch(setUser(data))
    }
    return data;
  }
)


export const updateUserAsync = createAsyncThunk<void,
{name: string, email: string},
{
  dispatch: AppDispatch;
  state: RootState;
}>(
  "user/updateAccount", async (dataNew, thunkAPI) => {
    const data  = await updateAccount(dataNew);
    return data;
  }
)