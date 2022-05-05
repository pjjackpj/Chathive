import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CutomButton2 = ({ onPress, text }) => {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.container]}
      >
        <Text style={[styles.text]}>{text}</Text>
      </Pressable>
    );
  };

export default CutomButton2

const styles = StyleSheet.create({
    container: {
        
        width: "80%",
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5,
        borderColor:'#8249a0',
        borderWidth:2,
      },
    
      
      
    
      text: {
        fontWeight: "bold",
        color: "#8249a0",
         
      },
});