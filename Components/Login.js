import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_USER } from '../Store'
export default function LoginForm({navigation}) {
  const dispatch = useDispatch()
  const access_token = useSelector((state) => state.access_token)
  let dataUser = {
    email: '',
    password: ''
  }
  useEffect(() => {
    if(access_token) {
      navigation.navigate('HomeScreen');
      localStorage.setItem('access_token', access_token)
    }
  },[access_token]);
  const goRegister = () => {
    navigation.navigate('RegisterForm');
  }
  const getEmail = (text) => {
    dataUser.email = (text);
  }
  const  getPassword = (text) => {
    dataUser.password = text;
  }
  const  submitLogin = () => {
    dispatch(LOGIN_USER(dataUser))
    if (access_token) {
      navigation.navigate('HomeScreen')
    }
  }
  return (
    <View style={styles.container} >
      <ImageBackground source={{ uri: 'https://wallpaperaccess.com/full/722327.jpg' }} style={ styles.image }>
          <Text style={styles.text}>Login</Text>
            <View style={styles.inputView} >
                <TextInput
                  style={styles.inputText}
                  placeholder="Email…"
                  placeholderTextColor="#003f5c"
                  onChangeText = {text => getEmail(text)}
                  />
              </View>
              <View style={styles.inputView} >
                  <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText = { text => getPassword(text)}
                    />
                </View>
                <TouchableOpacity>
                  <Text style={styles.forgot}
                  onPress={() => goRegister()}>
                  Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.loginBtn}>
                  <Text style = {styles.loginText}
                  onPress={() => submitLogin()}>LOGIN</Text>
                </TouchableOpacity>
          <StatusBar style="auto" />
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
  loginText: {
    color:"black",
    fontSize:14,
    textAlign: "center",
    fontWeight: "bold"
  },
  forgot:{
    color:"black",
    fontSize:14,
    textAlign: "center",
    fontWeight: "bold"
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent:"center",
    padding:20
  },
  inputText:{
   height:50,
   color:"black"
 },
  text: {
    color: "black",
    marginBottom: 20,
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  input: {
    width: 250,
    height: 30,
    color: "black"
  },
  loginBtn: {
     width: "80%",
     marginLeft: "10%",
     marginRight: "10%",
     backgroundColor: "#12c4ed",
     borderRadius: 25,
     height: 50,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 20,
     marginBottom: 10,
     justifyContent: "center"
   }
});
