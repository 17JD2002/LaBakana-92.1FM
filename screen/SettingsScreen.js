import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView} from "react-native";

const SettingsScreen = () =>{
    return (
        <SafeAreaView style={{justifyContent:'center'}}>
        <Text
        style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: "20%"
        }}
        >ACERCA DE</Text>
         <Image
        resizeMode="contain"
      style={{ width: 120, height: 151, marginTop: "1%", alignSelf:'center'}}
      source = {require('../assets/fondo.png')}
    />
        <Text
         style={{
            fontSize: 18,
            textAlign: "center",
            marginTop: "20%"
        }}
        >Puedes ser un artista que quiere presentarse a sí mismo {'\n'}
        y a su trabajo, o un negocio con una misión que describir.</Text>
        </SafeAreaView>
    );
}
export default SettingsScreen;