import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";

import Logo from "../assets/images/Logo.png";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "react-native-elements";
//import { KeyboardAvoidingView } from "react-native";
import CustomButton from "./Components/CustomButton";
//import CustomButton1 from "./Components/CutomButton1";
import CutomButton1 from "./Components/CutomButton1";
import CustomInput from "./Components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";





const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    
    navigation.navigate('Chats');
  };
  const onForgotPasswordPressed = () => {
    
    navigation.navigate('Reset your password');
  };
  const onSignInFacebook = () => {
    console.warn("Facebook");
    
  };
  const onSignInGoogle = () => {
    console.warn("Google");
  };
  const onSignInApple = () => {
    console.warn("Apple");
  };
  const onSignUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View behavior="padding" style={styles.container}>
      <StatusBar style="light" />
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <View>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
        </View> 
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CutomButton1
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
        />

        <CustomButton
          text="Sign In With Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In With Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In With Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />

        <CutomButton1
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    marginBottom: 90,
  },
  inputContainer: {
    width: 300,
    marginTop: 50,
    backgroundColor: "white",
    width: "80%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});
