import React from 'react';
import { StyleSheet,Text,View,Button, TextInput } from 'react-native';

export default function Tela1({navigation}){
    return(
      <View style={styles.container}> 
      <View>
        <TextInput
         style={styles.input}
         onChangeText={nome => setNome(nome)}
         placeholder='Digite seu nome:'
        >

        </TextInput>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1B1A60',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        width: 355,
        borderRadius: 200 / 5,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: '#0B0A4B',
        height: 68,
        color: "white",
        fontSize: 24
      },
  });
  