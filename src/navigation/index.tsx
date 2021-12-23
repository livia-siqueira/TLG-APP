import { RootState } from "@types";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import { AppNavigator } from "./GameNavigator";




import React from 'react';

import AuthRoutes from './AuthNavigator/index';

const Routes: React.FC = () => {
  const hasUserLogged = useSelector((state: RootState) => state.user.userActual);


  return hasUserLogged ? <AppNavigator/> : <AuthRoutes />;
};

export default Routes;