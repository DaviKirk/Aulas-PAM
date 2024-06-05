import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.ViewTextCadastro}>
        <Text style={styles.TextCadastro}>Cadastrar no </Text>
        <Text style={styles.TextCadastroEco}>Eco</Text>
      </View>
      <View
        style={styles.ViewInputs}
      >
        <TextInput
          style={styles.input}
          onChangeText={gmail => setGmail(gmail)}
          placeholder='E-mail:'
          placeholderTextColor='white'
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder='User Name:'
          placeholderTextColor='white'
        >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={senha => setSenha(senha)}
          placeholder='Senha:'
          placeholderTextColor='white'
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={senhaConfirm => setSenhaConfirm(senhaConfirm)}
          placeholder='Confirme a senha:'
          placeholderTextColor='white'
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.viewLogin}>
        <Text style={styles.Textologin}>ja possuo conta:</Text>
        <TouchableOpacity
        onPress={() => { navigation.navigate("TelaLogin") }}
        >
          <Text style={styles.Textologinbotao}>logar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => { navigation.navigate("Home") }}
        >
          <Text style={styles.TextBotao}>Enviar</Text>
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
    fontSize: 24,
  },
  TextCadastroEco: {
    fontWeight: 'bold',
    color: '#F26600',
    fontSize: 24,
  },
  ViewTextCadastro: {
    flexDirection: 'row',
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
    marginRight: 180
  },
});
