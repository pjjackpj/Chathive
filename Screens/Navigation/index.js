import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import EmailConfirm from '../EmailConfirm';
import ForgotPassword from '../ForgotPassword';
import NewPassword from '../NewPassword';
import HomeScreen from '../HomeScreen';

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
    headerStyle: { backgroundColor: "#8249a0" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
  };
const Navigation = () => {
  return (
      <NavigationContainer>
    <Stack.Navigator screenOptions={globalScreenOptions} >
      <Stack.Screen  options={{
          title:'Lets Sign Up'
      }} name="Sign In" component={LoginScreen} />
      <Stack.Screen options={{
          title:'Register'
      }} name="Register" component={RegisterScreen} />
      <Stack.Screen options={{
          title:'Confirm Email'
      }} name="Confirm email" component={EmailConfirm} />
      <Stack.Screen options={{
          title:'Forgot Password?'
      }} name="Reset your password" component={ForgotPassword} />
      <Stack.Screen options={{
          title:'New Password'
      }} name="New Password" component={NewPassword} />
      <Stack.Screen options={{
          title:'Home'
      }} name="Chats" component={HomeScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})