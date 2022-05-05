import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import CustomButton from "./Components/CustomButton";
import CustomButton1 from "./Components/CutomButton1";
import CutomButton1 from "./Components/CutomButton1";
import CustomInput from "./Components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";


const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordrepeat] = useState("");

  const signIn = () => {};

  const navigation= useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('Confirm email')
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
  const onSignInPress = () => {
    navigation.navigate('Confirm email')
  };
  
  const onTerms = () => {
    console.warn("Term");
  };
  const onPrivacy = () => {
    console.warn("Privacy");
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View behavior="padding" style={styles.container}>
        <View style={{ height: 35 }} />

        <StatusBar style="light" />
        <Text style={styles.title}>Create an account</Text>
        <View>
        <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
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
          <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordrepeat}
            secureTextEntry
          />
        </View>

        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTerms} >Terms of Use </Text> and{" "}
          <Text style={styles.link} onPress={onPrivacy} >Privacy Policy</Text>
        </Text>

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
          text="Have an account? Sign in"
          onPress={onSignInPress}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    marginBottom: 90,
  },
  inputContainer: {
    width: 300,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
    width:305,
  },
  link: {
    color: "#FDB075",
  },
});
