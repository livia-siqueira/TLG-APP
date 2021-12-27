import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen, Cart } from "@screens";
import { colors } from "../../shared/constants/colors";
import App from "../../../App";


  const AuthStack = createNativeStackNavigator();

  const AuthNavigator = () => {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen component={AuthScreen} name="AuthScreen" options={{headerShown: false}}/>
      </AuthStack.Navigator>
      
    );
  };

  export default AuthNavigator;