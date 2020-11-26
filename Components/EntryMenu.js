import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
export default function EntryMenu({navigation}) {
  const chooseMenu = (page) => {
    if(page === 'Register') {
      navigation.navigate('RegisterForm');
    } else if(page === 'Login') {
      navigation.navigate('LoginForm');
    }
  }
  return (
    <View style={styles.container} >
      <ImageBackground source={{ uri: 'https://wallpaperaccess.com/full/722327.jpg' }} style={ styles.image }>
        <StatusBar style="auto" />
        <TouchableOpacity
        style = {styles.registerBtn}
        onPress={() => chooseMenu('Register')}>
          <Text style = {styles.loginText}>Register Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.loginBtn}
        onPress={() => chooseMenu('Login')}>
          <Text style = {styles.loginText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  registerBtn: {
     width: "80%",
     marginLeft: "10%",
     marginRight: "10%",
     backgroundColor: "#0ed9f1",
     borderRadius: 25,
     height: 50,
     alignItems: "center",
     justifyContent: "center",
     marginTop: "95%",
     marginBottom: 10,
     justifyContent: "center"
   },
   loginBtn: {
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%",
      backgroundColor: "#0ed9f1",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10,
      justifyContent: "center"
    },
   loginText: {
     color:"black",
     fontSize:14,
     textAlign: "center",
     fontWeight: "bold"
   },
});
