import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image} from "react-native";

const StackScreen = () =>{
    return (
        <SafeAreaView style={{justifyContent:'center'}}>
        <Text
        style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: "20%"
        }}
        >CONTACTO</Text>
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
        >Esta es una página con información de contacto básica,{'\n'} 
        como la dirección y el número de teléfono. Incluso puedes {'\n'} 
        probar un plugin para añadir un formulario de contacto.
        </Text>
        </SafeAreaView>
    );
}
export default StackScreen;