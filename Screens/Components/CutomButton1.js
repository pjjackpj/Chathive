import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CutomButton1 = ({ onPress, text }) => {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.container]}
      >
        <Text style={[styles.text]}>{text}</Text>
      </Pressable>
    );
  };

export default CutomButton1

const styles = StyleSheet.create({
    container: {
        
        width: "80%",
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5,
      },
    
      
      
    
      text: {
        fontWeight: "bold",
        color: "gray",
      },
});