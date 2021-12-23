import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen, Cart } from "@screens";
import { colors } from "../../shared/constants/colors";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppNavigator } from "../GameNavigator";
import App from "../../../App";

const styleHeaderDefault = {
    headerStyle: {
      backgroundColor: colors.colorPrimary,
    },
    headerTitleStyle: {
      fontFamily: 'Roboto',
      color: 'black',
    },
    headerBackTitleStyle: {
      fontFamily: 'Roboto'
    },
    headerTintColor: colors.colorPrimary,
  };

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