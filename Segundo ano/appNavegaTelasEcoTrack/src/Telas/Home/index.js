import React from 'react';
import react, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';


export default function Tela1({ navigation }) {

  const [modelo, setModelo] = useState(0);

  const modelos = [
    { modeloNome: 'Qual seu Proximo destino?', valor: "" },
    { modeloNome: 'Cananeia', valor: 1 },
    { modeloNome: 'Maruja', valor: 2 },
    { modeloNome: 'Pererinha', valor: 3 },
    { modeloNome: 'Ilha comprida', valor: 4 }
  ]

  return (
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        <View
          style={styles.nav}
        >
          <View>
            <TouchableOpacity
            onPress={() => {navigation.navigate("settings")}}
            >
              <View
                style={styles.iconeSentings}
              ></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View
                style={styles.iconePerfil}
              ></View>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder='Sera substituido'
          placeholderTextColor='black'
        >
        </TextInput>
      </View>
      <ScrollView>
        <View
          style={styles.box}
        >
          <View style={styles.perfilVendedor}>
            <View
              style={styles.iconePerfil}
            ></View>
            <Text style={styles.TextoVendedor} >Iruam FX</Text>
          </View>
          <View
            style={styles.Foto}
          >
          </View>
          <View>
            <Text style={styles.NomeViagem}>Passeio de Drone</Text>
          </View>
          <View>
            <Text style={styles.precoTexto}>259,99 R$</Text>
          </View>
        </View>
        <View
          style={styles.box}
        >
          <View style={styles.perfilVendedor}>
            <View
              style={styles.iconePerfil}
            ></View>
            <Text style={styles.TextoVendedor} >Davi Kirk</Text>
          </View>
          <View
            style={styles.Foto}
          >
          </View>
          <View>
            <Text style={styles.NomeViagem}>Trilha do ariri</Text>
          </View>
          <View>
            <Text style={styles.precoTexto}>2,99 R$</Text>
          </View>
        </View>
        <View
          style={styles.box}
        >
          <View style={styles.perfilVendedor}>
            <View
              style={styles.iconePerfil}
            ></View>
            <Text style={styles.TextoVendedor} >Gustavo Xinaider</Text>
          </View>
          <View
            style={styles.Foto}
          >
          </View>
          <View>
            <Text style={styles.NomeViagem}>Passei de F18</Text>
          </View>
          <View>
            <Text style={styles.precoTexto}>3.796.512,98 R$</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A60',
  },
  input: {
    width: 355,
    borderRadius: 200 / 5,
    paddingLeft: 30,
    marginBottom: 21,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: '#ECECEC',
    height: 68,
    fontSize: 24,
    color: '#fff',
    padding: 20,
    fontWeight: 'bold',
  },
  iconePerfil: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 3,
  },
  iconeSentings: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 30,
    paddingBottom: 19
  },
  header: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderBottomColor: '#FF4C00',
    borderBottomWidth: 10,
  },
  box: {
    height: 380,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  perfilVendedor: {
    flexDirection: 'row',
  },
  TextoVendedor: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 10,
    paddingLeft: 5
  },
  Foto: {
    height: 200,
    backgroundColor: '#d9d9d9',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  NomeViagem: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 12
  },
  precoTexto: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 12,
    color: 'green'
  }
});
