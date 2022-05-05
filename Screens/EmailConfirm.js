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
  //import CustomButton1 from "./Components/CutomButton1";
  import CutomButton1 from "./Components/CutomButton1";
  import CutomButton2 from "./Components/CustomButton2";
  import CustomInput from "./Components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
  
  
  
  const EmailConfirm = () => {
    const [code, setCode] = useState("");
  
    const signIn = () => {};
    const navigation = useNavigation();

    const onConfirmPressed = () => {
      navigation.navigate('Chats');
    };
    
    
    const onSignInPress = () => {
      navigation.navigate('Sign In');
    };
    
    
    const onResendPress = () => {
      console.warn("onResendPress");
    };
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View behavior="padding" style={styles.container}>
          <View style={{ height: 35 }} />
  
          <StatusBar style="light" />
          <Text style={styles.title}>Confirm your email</Text>
          <View>
            
           <CustomInput
            placeholder="Code"
            value={code}
            setValue={setCode}
          />
          </View>
  
          <CustomButton text="Confirm" onPress={onConfirmPressed} />

          <CutomButton2
            text="Resend code"
            onPress={onResendPress}
          />
          
          
  
          <CutomButton1
            text="Back to Sign in"
            onPress={onSignInPress}
          />
        </View>
      </ScrollView>
    );
  };
  
  export default EmailConfirm;
  
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
    },
    link: {
      color: "#FDB075",
    },
  });
  