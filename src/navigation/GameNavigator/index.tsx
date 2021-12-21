import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AuthNavigator from "../AuthNavigator";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../../screens/Home";
import { colors } from "../../shared/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "react-navigation-stack";
import { Game } from "../../screens/Game";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Cart } from "../../screens";


const Tab = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();


const GameNavigator = () => {
  return (
    <GameStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "TLG",
        headerTitleStyle: {
          color: colors.colorTextTitle,
          fontFamily: "Roboto-BoldItalic",
          fontSize: 28,
        },
        headerStyle: {
          backgroundColor: colors.colorPrimary,
        },
      }}
    >
      <GameStack.Screen component={Game} name="TLG" />
      <GameStack.Screen component={Cart} name="Cart"/>

    </GameStack.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 2,
          backgroundColor: colors.colorWhite,
          borderRadius: 15,
          height: 60,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons name="school-sharp" size={25} color={colors.colorDetailsGreen} />
              <Text style={styles.text}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={Home}
        name="Account"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons name="person-circle-outline" size={25} color={colors.colorDetailsGreen}/>
              <Text style={styles.text}>Account</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={GameNavigator}
        name="New Bet"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons name="game-controller" size={25} color={colors.colorDetailsGreen} />
              <Text style={styles.text}>Bet now</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={Home}
        name="Add Game"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons name="add-circle-sharp" size={25} color={colors.colorDetailsGreen}/>
              <Text style={styles.text}>New Game</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconTabRound: {
    alignItems: 'center', 
    justifyContent: 'center', 
    top: '5%'
  },
  text: {
    color: colors.colorTextTitle,
    fontFamily: 'Roboto-BoldItalic'
  }
});
