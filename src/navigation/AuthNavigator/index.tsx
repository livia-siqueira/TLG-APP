import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../../screens/Auth/AuthScreen";
import { colors } from "../../shared/constants/colors";
import { Home } from "../../screens/Home";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppNavigator } from "../GameNavigator";

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
        <AuthStack.Screen component={AppNavigator} name="App"/>
      </AuthStack.Navigator>
      
    );
  };

  const NavigatorPrincipal = createSwitchNavigator({
    Auth: {
      screen: AuthNavigator
    },
    App: {
      screen: AppNavigator
    }
  })
  
    export default createAppContainer(NavigatorPrincipal)