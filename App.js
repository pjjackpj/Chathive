import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView , StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import EmailConfirm from "./Screens/EmailConfirm";
import ForgotPassword from "./Screens/ForgotPassword";
import NewPassword from "./Screens/NewPassword";
import Navigation from "./Screens/Navigation";
const Stack = createStackNavigator();


export default function App() {
  return  (
      <SafeAreaView style={styles.root} >
        
          <Navigation/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
   backgroundColor:'#F9FBFC',

  },
});
