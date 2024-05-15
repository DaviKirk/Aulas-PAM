
import react, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [modelo, setModelo] = useState(0);
  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [enreco, setEndereco] = useState('');
  const [valorViagem, setValorViagem] = useState(15000);
  const [checked, setChecked] = useState('');

  const modelos = [
    { modeloNome: 'Qual seu Proximo destino?', valor: "" },
    { modeloNome: 'Cananeia', valor: 1 },
    { modeloNome: 'Maruja', valor: 2 },
    { modeloNome: 'Pererinha', valor: 3 },
    { modeloNome: 'Ilha comprida', valor: 4 }
  ]

  function enviarDados() {
    if (nome == '' || CPF == '' || enreco == '' || modelo == '') {
      alert('preencha todos os campos corretamente');
    }
    else {
      alert('informações da conta/passeio \n\n' +
        'Nome:' + nome + '\n' +
        'CPF: ' + CPF + '\n' +
        'Endereço ' + enreco + '\n' +
        'Preferencia: ' + checked + '\n' +
        'Valor: ' + valorViagem.toFixed(0) + 'R$ \n' +
        'Destino de interesse: ' + modelos[modelo].modeloNome

      )
    }
  }

  let modeloItems = modelos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.modeloNome}></Picker.Item>

  })


  return (
    <LinearGradient
      style={styles.container}
      colors={["#F6855D", "#fff"]}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0, y: 0.33 }}
    >
      <View style={styles.sol}>
      </View>
      <View style={styles.areaModelo}>
        <Picker
          style={styles.pickerModelo}
          selectedValue={modelo}
          onValueChange={(itemValue, itemIndex) => setModelo(itemValue)}
        >
          {modeloItems}
        </Picker>
      </View>
      <View style={styles.valorViagem}>
        <Text style={styles.sliderText} >Valor da viagem:</Text>
        <Text style={styles.sliderText}>R${valorViagem.toFixed(0)}</Text>
      </View>
      <View style={styles.areaSlider}>
        <Slider
          style={{ width: 360, height: 50 }}
          minimumTrackTintColor='#6495ED'
          minimumValue={1200}
          maximumValue={5000}
          value={valorViagem}
          onValueChange={(valorViagem) => setValorViagem(valorViagem)}
          thumbTintColor='#F6855D'
        >
        </Slider>
      </View>
      <Text style={styles.textoRadio} >sua preferencia:</Text>
      <View style={styles.areaRadio}>

        <RadioButton
          value="praia"
          status={checked == "praia" ? 'cheked' : 'unchecked'}
          onPress={() => setChecked('praia')}
        >
        </RadioButton>
        <Text>Praias</Text>
        <RadioButton
          value="rio"
          status={checked == "rio" ? 'cheked' : 'unchecked'}
          onPress={() => setChecked('rio')}
        >
        </RadioButton>
        <Text>Rios</Text>
        <RadioButton
          value="trilha"
          status={checked == "trilha" ? 'cheked' : 'unchecked'}
          onPress={() => setChecked('trilha')}
        >
        </RadioButton>
        <Text>Rios</Text>
      </View>
      <View style={styles.areaformulario}>
        <Text style={styles.tituloCadastro}>Cadastro:</Text>

        <Text style={styles.Text}>Nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder='Digite seu nome:'
        >
        </TextInput>
        <Text style={styles.Text}>CPF:</Text>

        <TextInput
          style={styles.input}
          onChangeText={CPF => setCPF(CPF)}
          placeholder='Digite seu CPF:'
        >
        </TextInput>
        <Text style={styles.Text}>Endereço:</Text>

        <TextInput
          style={styles.input}
          onChangeText={enreco => setEndereco(enreco)}
          placeholder='Digite seu enredeço:'
        >
        </TextInput>
      </View>
      <Image
        source={require('./assets/background.png')}
        style={styles.backgroundMontanha}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={enviarDados}
      >
        <Text style={styles.TextBotao}>Enviar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#000",
    width: '25%',
    alignSelf: "center",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
    right: 110,
    zIndex: 2,
  },
  sol: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    top: 25,
    borderRadius: 200 / 1,
    flexDirection: 'column',
  },
  pickerModelo: {
    borderWidth: 1,
    borderColor: "#000",

  },
  areaModelo: {
    backgroundColor: '#fff',
    width: 330,
    height: 55,
    borderRadius: 200 / 5,
    borderWidth: 1,
    borderColor: "#000",
    top: 150,
    position: "absolute",
  },
  tituloCadastro: {
    fontFamily: "Roboto",
    fontSize: 20,
    flexDirection: 'column',
    marginRight: 220,
    marginTop: 20,

  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    width: 330,
    borderRadius: 200 / 5,
    padding: 10,
    marginBottom: 5,
    justifyContent: "center",
    marginHorizontal: 5,
    alignSelf: "center",
    backgroundColor: '#fff',
    height: 40,
    zIndex: 2,
  },
  Text: {
    fontSize: 17,
    color: '#000',
    marginTop: 15,
    zIndex: 2,
  },
  TextBotao: {
    fontSize: 17,
    color: '#000',
    zIndex: 2,
  },
  areaRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,

  },
  textoRadio: {
    fontSize: 17,
    color: '#000',
    right: 110,

  },
  backgroundMontanha: {
    position: "absolute",
    top: 450,
    zIndex: 1,
  },
  sliderText: {
    fontSize: 17,
    color: '#000',
    right: 98,
  },
});
