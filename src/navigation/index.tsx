import { AppDispatch, RootState, useCallback, useEffect } from "@shared";
import { useDispatch, useSelector } from "react-redux";
import { AppNavigator } from "./GameNavigator";
import AuthRoutes from './AuthNavigator/index';
import { gamesLoads } from "../store/Slices/Game/thunk";
import { getUserAsync } from "../store/Slices/User/thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeGameSelected } from "../store/Slices/Game";


const Routes: React.FC = () => {
  const hasUserLogged = useSelector((state: RootState) => state.user.userActual);
  const dispatch : AppDispatch = useDispatch();

  const getGames = useCallback(async () => {
    try {
      await dispatch(gamesLoads());
    } catch (e: any) {
     throw new Error(e);
    }
  }, []);


  const loadUser = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        await dispatch(getUserAsync(token));
      }
    } catch (e: any) {
      console.log(e);
    }
  }, [hasUserLogged]);


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