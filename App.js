import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryMenu from './Components/EntryMenu.js';
import HomeScreen from './Components/Home.js';
import LoginForm from './Components/Login.js';
import RegisterForm from './Components/Register.js';
const Stack = createStackNavigator()
import { Provider } from 'react-redux'
import store from './Store/index.js'
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EntryMenu" component={EntryMenu} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="RegisterForm" component={RegisterForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
