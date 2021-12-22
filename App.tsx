import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { AuthScreen } from './src/screens/Auth';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import { fecthFonts } from './src/shared/fonts';
import AppLoading from 'expo-app-loading';
import { AppNavigator } from './src/navigation/GameNavigator';
import 'react-native-gesture-handler'
import NavigatorPrincipal from './src/navigation/AuthNavigator';
import { Navigator } from './src/navigation';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (  
      <AppLoading
        startAsync={fecthFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() =>
          Alert.alert("Erro", "Problema ao carregar fontes", [
            {
              text: "Ok",
            },
          ])
        }
      />
    );
  }

  return (
    <>
    <Provider store={store}>
      <NavigationContainer>
      <NavigatorPrincipal/>
      </NavigationContainer>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
