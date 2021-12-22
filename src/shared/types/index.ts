export type RootAuthStackParamList = {
    SignIn:{};
    SignUp: undefined;
  };

import { Action, ThunkAction } from "@reduxjs/toolkit";
import store from "../../store/index";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type CartAPI = {
  id: string,
  numbers: number[]
}
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
  idUser: number;
  numbers: number[];
  price: number;
  idTypeGame: number;
}

export type GamesRules  = {
  min_cart_value: number;
  types: Game[];
}

export type User = {
  id: number;
  name: string;
  email: string;
  bets: Bet[];
};

export type ApiUser = {
  created_at: string;
  email: string;
  id: number;
  name: string;
  updated_at: string;
};

export type TokenApi = {
  expires_at: string;
  token: string;
  type: string;
};

export type ApiError = {
  message: string;
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
}