import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useCallback } from "react";
import AuthNavigator from "../AuthNavigator";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../../screens/Home";
import { colors } from "../../shared/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "react-navigation-stack";
import { Game } from "../../screens/Game";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, GestureResponderEvent } from "react-native";
import { Cart } from "../../screens";
import { Account } from "../../screens/Account";
import { NewGame } from "../../screens/NewGame";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ButtonHeader } from "@components";
import { logoutUser } from "../../store/User";
import AsyncStorage from  '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();

const GameNavigator = () => {
  return (
    <GameStack.Navigator>
      <GameStack.Screen options={{headerShown: false}} component={Game} name="TLG" />
      <GameStack.Screen component={Cart} name="Cart" />
    </GameStack.Navigator>
  );
};


const CustomButtonTab = (props: { onPress: (((event: GestureResponderEvent) => void) & (() => void)) | undefined; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
  <TouchableOpacity style={{top: -30, justifyContent: "center", alignItems: 'center', }} onPress={props.onPress}>
    <View style={{width: 70, height: 60, borderRadius: 90 ,backgroundColor: colors.colorDetailsGreen,}}>
    {props.children}
    </View>
  </TouchableOpacity>
  );
}

export const AppNavigator = () => {
  const userLogged = useSelector((state: RootState) => state.user.userActual);
  const hasAdmin = userLogged ? userLogged.is_admin : 0;
  const dispatch : AppDispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      dispatch(logoutUser());
      console.log('oq rolou');
    } catch (e: any) {
      console.log(e)
    }
  };

  
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
          backgroundColor: colors.colorPrimary,
        },
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
        name="Post"
        component={Home}
        options={() => ({
          tabBarIcon: ({ color }) => 
            <Ionicons
              name="log-out-outline"
              size={25}
              color={colors.colorFooterCart}
            />
          ,
          tabBarButton: (props) => <CustomButtonTab {...props} onPress={handleLogout}/>
        })}
      />
      <Tab.Screen
        component={GameNavigator}
        name="New Bet"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconTabRound}>
              <Ionicons
                name="game-controller"
                size={25}
                color={colors.colorDetailsGreen}
              />
              <Text style={styles.text}>Bet now</Text>
            </View>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ButtonHeader}>
              <Item
                title="Cart"
                iconName="cart"
                color={colors.colorDetailsGreen}
                onPress={() => {
                  
                }}
              />
            </HeaderButtons>
          )
        }}
      />
      {hasAdmin === 1 ? (
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
      ) : (
        <Tab.Screen
          component={NewGame}
          name="Add Game"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={styles.iconTabRound}>
                <Ionicons
                  name="list"
                  size={25}
                  color={colors.colorDetailsGreen}
                />
                <Text style={styles.text}>All games</Text>
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
