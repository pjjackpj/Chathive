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
  
  
  
  
  
  
  const ForgotPassword = () => {
    const [username, setUsername] = useState("");
  
    const signIn = () => {};

    const navigation = useNavigation();

    const onSendPressed = () => {
      navigation.navigate('New Password');

    };
    
    
    const onSignInPress = () => {
      navigation.navigate('Sign In');

    };
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View behavior="padding" style={styles.container}>
          <View style={{ height: 35 }} />
  
          <StatusBar style="light" />
          <Text style={styles.title}>Reset your password</Text>
          <View>
            
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          </View>
  
          <CustomButton text="Send" onPress={onSendPressed} />

          
          
          
  
          <CutomButton1
            text="Back to Sign in"
            onPress={onSignInPress}
          />
        </View>
      </ScrollView>
    );
  };
  
  export default ForgotPassword;
  
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
  