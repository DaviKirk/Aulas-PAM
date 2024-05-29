import React from 'react';
import { StyleSheet,Text,View,Button } from 'react-native';

export default function Tela1({navigation}){
    return(
      <View style={styles.container}> 
       <Text>Tela1</Text>
       <Button
       title='ir para Tela2'
       onPress={() => navigation.navigate("Tela2")}
       >

       </Button>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ff00',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  