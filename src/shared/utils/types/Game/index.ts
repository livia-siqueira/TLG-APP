
import { Action, ThunkAction } from "@reduxjs/toolkit";
import store from "../../../../store/index";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;



export type Game = {
  id: number;
  numbers: number[];
  price: number;
  date: string;
  type: string;
  color: string;
  range: number;
  description: string;
  'max_number': number;
};

export type Bet = {
  user_id: number;
  choosen_numbers: number[];
  price: number;
  game_id: number;
  created_at: string;
}

export type Games  = {
  min_cart_value: number;
  types: Game[];
}

export type User = {
  id: number;
  name: string;
  email: string;
  bets: Bet[];
  is_admin: number;
  password: string;
};

export type AuthSliceState = {
  user: User | null;
};

export type SliceUser = {
  users: User[],
  userActual: User | null
}

export type RootNavigationGame = {
  Home: undefined;
  Game: undefined;
  Cart: undefined;
  NewBet: undefined;
}