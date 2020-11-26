import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
export default function HomeScreen() {
  return (
      <View style={styles.container} >
          <Image
          source={{
            uri: 'https://www.nanocyl.com/wp-content/uploads/2015/10/technology-applications.jpg',
          }}
          style={styles.tinyLogo}
          />
          <Text style={styles.welcomeText}>Welcome to the App</Text>
          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque porttitor turpis viverra lobortis convallis. Libero tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes. Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s
          </Text>
        <StatusBar style="auto" />
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
  contentText: {
    textAlign: "justify",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%"
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "5%"
  },
  tinyLogo: {
    width: "100%",
    height: "20%",
  },
});
