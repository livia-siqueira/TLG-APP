import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Home, Cart, Game, Account, NewGame } from "@screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text} from "react-native";
import { RootState, useSelector, colors, AppDispatch, useDispatch } from "@shared";
import { changeGameSelected } from "../../store/Slices/Game";

const Tab = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();


const GameNavigator = () => {
  const dispatch : AppDispatch = useDispatch(); 
  useEffect(() => {
    dispatch(changeGameSelected("Lotofácil"));
  }, [])
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        options={{ headerShown: false }}
        component={Game}
        name="TLG"
      />
      <GameStack.Screen component={Cart} name="Cart" />
    </GameStack.Navigator>
  );
};



export const AppNavigator = () => {
  const userLogged = useSelector((state: RootState) => state.user.userActual);
  const hasAdmin = userLogged ? userLogged.is_admin : 0;

 

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "TLG",
        headerTitleStyle: {
          color: colors.colorTextTitle,
          fontFamily: "Roboto-BoldItalic",
          fontSize: 28,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        tabBarStyle: {
          position: "absolute",
          elevation: 3,
          backgroundColor: colors.colorWhite,
          height: 55,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons
                name="home-sharp"
                size={25}
                color={colors.colorDetailsGreen}
              />
              <Text style={styles.text}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={Account}
        name="Account"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons
                name="person-circle-outline"
                size={25}
                color={colors.colorDetailsGreen}
              />
              <Text style={styles.text}>Account</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={GameNavigator}
        name="NewBet"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons
                name="game-controller"
                size={25}
                color={colors.colorDetailsGreen}
              />
              <Text style={styles.text}>New Bet</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      {hasAdmin === 1 && (
        <Tab.Screen
          component={NewGame}
          name="Add Game"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={styles.iconTabRound}>
                <Ionicons
                  name="add-circle-sharp"
                  size={25}
                  color={colors.colorDetailsGreen}
                />
                <Text style={styles.text}>New Game</Text>
              </View>
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconTabRound: {
    alignItems: "center",
    justifyContent: "center",
    top: "5%",
  },
  text: {
    color: colors.colorTextTitle,
    fontFamily: "Roboto-BoldItalic",
  },
});
