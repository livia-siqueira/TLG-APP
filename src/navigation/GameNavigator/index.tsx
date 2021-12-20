import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AuthNavigator from "../AuthNavigator";
import {Ionicons} from  '@expo/vector-icons'
import { Home } from "../../screens/Home";
import { colors } from "../../shared/constants/colors";



const AppDrawer = createDrawerNavigator();

export const AppNavigator = () => {
    return (
      <AppDrawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: 'TLG', 
          headerTitleStyle: {
            color: colors.colorTextTitle,
            fontFamily: 'Roboto-BoldItalic',
            fontSize: 28
          },
          headerStyle: {
            backgroundColor: colors.colorPrimary
          }
        }}
        
      >
        <AppDrawer.Screen
          component={Home}
          name="Home"
          options={{
            drawerIcon: () => {
              return (
                <Ionicons
                  name="game-controller-outline"
                  size={26}
                />
              );
            },
          }}
        />
        <AppDrawer.Screen
          component={Home}
          name="Account"
          options={{
            drawerIcon: () => {
              return (
                <Ionicons
                  name="game-controller-outline"
                  size={26}
                />
              );
            },
          }
        }
        />
        <AppDrawer.Screen
          component={Home}
          name="New Bet"
          options={{
            drawerIcon: () => {
              return (
                <Ionicons
                  name="game-controller-outline"
                  size={26}
                />
              );
            },
          }}
        />
         <AppDrawer.Screen
          component={Home}
          name="Add Game"
          options={{
            drawerIcon: () => {
              return (
                <Ionicons
                  name="game-controller-outline"
                  size={26}
                />
              );
            },
          }}
        />
      </AppDrawer.Navigator>
    );
  };
  