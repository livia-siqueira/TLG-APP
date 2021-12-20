import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../../screens/Auth/AuthScreen";
import { colors } from "../../shared/constants/colors";
import { Home } from "../../screens/Home";

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
        <AuthStack.Screen component={AuthScreen} name="AuthScreen" />
        <AuthStack.Screen component={Home} name="Home"/>
      </AuthStack.Navigator>
      
    );
  };
  
    export default AuthNavigator