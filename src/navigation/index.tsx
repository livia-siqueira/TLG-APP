import { AppDispatch, RootState } from "@types";
import { useDispatch, useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import { AppNavigator } from "./GameNavigator";



import React, { useCallback, useEffect } from 'react';

import AuthRoutes from './AuthNavigator/index';
import { gamesLoads } from "../store/Game/thunk";
import { getUserAsync } from "../store/User/thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Routes: React.FC = () => {
  const hasUserLogged = useSelector((state: RootState) => state.user.userActual);
  const dispatch : AppDispatch = useDispatch();

  const getGames = useCallback(async () => {
    try {
      await dispatch(gamesLoads());
    } catch (e: any) {
      console.log("erro");
    }
  }, []);

  

  const loadUser = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      console.log(token)
      if (token) {
        await dispatch(getUserAsync(token));
      }
    } catch (e: any) {
      console.log(e);
    }
  }, []);


  useEffect(() => {
    async function loadDatas() {
      await getGames();
      await loadUser();
    }
    loadDatas();
  }, [getGames]);

  return hasUserLogged ? <AppNavigator/> : <AuthRoutes />;
};

export default Routes;