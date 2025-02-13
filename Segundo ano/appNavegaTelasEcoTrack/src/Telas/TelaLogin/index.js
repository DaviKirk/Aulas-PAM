import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.ViewTextCadastro}>
        <Text style={styles.TextCadastro}>Bem vindo</Text>
        <Text style={styles.TextCadastro}>ao</Text>
        <Text style={styles.TextCadastroEco}>EcoTrack</Text>
      </View>
      <View
        style={styles.ViewInputs}
      >
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder='User Name'
          placeholderTextColor='white'
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={senha => setSenha(senha)}
          placeholder='Senha'
          placeholderTextColor='white'
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.viewLogin}>
        <Text style={styles.Textologin}>Não possuo conta:</Text>
        <TouchableOpacity
          onPress={() => { navigation.navigate("TelaCadastro") }}
        >
          <Text style={styles.Textologinbotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => { navigation.navigate("Home") }}
        >
          <Text style={styles.TextBotao}>Logar</Text>
        </TouchableOpacity>
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
    paddingLeft: 30,
    marginBottom: 21,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: '#0B0A4B',
    height: 68,
    fontSize: 24,
    color: '#fff',
    padding: 20,
    fontWeight: 'bold',
  },
  TextCadastro: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 32,
  },
  TextCadastroEco: {
    fontWeight: 'bold',
    color: '#F26600',
    fontSize: 32,
  },
  ViewTextCadastro: {
    alignItems: 'center',
    flexDirection: 'col',
    marginBottom: 47
  },
  botao: {
    backgroundColor: '#F26600',
    width: 355,
    borderRadius: 200 / 5,
    marginBottom: 5,
    justifyContent: "center",
    alignSelf: "center",
    height: 68,
    marginTop: 57,
  },
  TextBotao: {
    color: '#fff',
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: 'bold',
  },
  Textologin: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Textologinbotao: {
    color: '#FFD600',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 4
  },
  viewLogin: {
    flexDirection: 'row',
    marginRight: 135
  },
});
