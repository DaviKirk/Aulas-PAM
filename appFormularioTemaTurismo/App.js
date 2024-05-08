import react, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Image } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [nome, setNome] = useState('');
  const [carro, setCarro] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState(0);
  const [valorCarro, setValorCarro] = useState(15000);
  const [utilitario, setUtilidario] = useState(false);
  const [checked, setChecked] = useState('masculino');

  const modelos = [
    { modeloNome: 'Hatch', valor: 1 },
    { modeloNome: 'Pickup', valor: 2 },
    { modeloNome: 'Sedan', valor: 3 },
    { modeloNome: 'SUV', valor: 4 }
  ]

  function enviarDados(){
    if(nome =='' || carro == ''){
      alert('preencha todos os campos corretamente');
    }
    else{
      alert('informações do carro \n\n' +
      'Nome proprietário:' +nome+ '\n'+
      'Sexo: ' + checked + '\n' +
      'Placa: ' +placa+
      'Carro ' + carro + '\n' +
      'Modelo: ' + modelos[modelo].modeloNome + '\n' +
      'Valor: ' + valorCarro.toFixed(2) + '\n' +
      'Carro Utilitário: ' +(utilitario ? 'sim' : 'não')
    
    )
    }
  }

  let modeloItems = modelos.map((v,k) => {
    return <Picker.Item key={k} value={k} label={v.modeloNome}></Picker.Item>

  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações do carro particular</Text>
      <View style={styles.areaformulario}>
        <Text style={styles.textoNome}>Nome Proprietário:</Text>

        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder='Digite aqui o nome do proprietario'
        >
        </TextInput>

        <View style={styles.areaRadio}>

          <RadioButton
            value="masculino"
            status={checked == "masculino" ? 'cheked' : 'unchecked'}
            onPress={() => setChecked('masculino')}
          >
          </RadioButton>
          <Text>Masculino</Text>
          <RadioButton
            value="feminino"
            status={checked == "feminino" ? 'cheked' : 'unchecked'}
            onPress={() => setChecked('feminino')}
          >
          </RadioButton>
        </View>
        <Text style={styles.textoNome}>Carro:</Text>

        <TextInput
          style={styles.input}
          onChangeText={carro => setCarro(carro)}
          placeholder='Digite aqui o nome do carro:'
        >
        </TextInput>
        <Text style={styles.textoNome}>Placa:</Text>

        <TextInput
          style={styles.input}
          onChangeText={placa => setPlaca(placa)}
          placeholder='Digite aqui a placa do seu carro:'
        >
        </TextInput>
        <View style={styles.areaModelo}>
          <Text style={styles.textoNome}>Modelo:</Text>
          <Picker
          style={styles.pickerModelo}
          selectedValue={modelo}
          onValueChange={(itemValue, itemIndex) => setModelo(itemValue)}
          >
            {modeloItems}
          </Picker>
          
        </View>
          <View style={styles.valorCarro}>
            <Text style={styles.textoNome} >Valor do carro:</Text>
            <Text style={styles.carroTexto}>R${valorCarro.toFixed(0)}</Text>
          </View>
          <View style={styles.areaSlider}>
            <Slider
            minimumTrackTintColor='#6495ED'
            minimumValue={15000}
            maximumValue={300000}
            value={valorCarro}
            onValueChange={(valorCarro) => setValorCarro(valorCarro)}
            >
            </Slider>
          </View>
          <View style={styles.areaUtilitario}>
            <Text style={styles.textoNome} >Utilitário:</Text>
            <Switch
            style={{paddingTop:15}}
            value={utilitario}
            onValueChange={utilitario => setUtilidario(utilitario)}
            >
            </Switch>
          </View>

        


        <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}
          >
            <Text style={styles.botaoTexto}>Mostrar Dados Carro</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    background: 'linear-gradient(to bottom, #ffffff, #0000ff)',
  
  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  textoNome:{
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
  },

  areaModelo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
pickerModelo:{
  flex:1
},
valorArea:{
  flexDirection:'row',
  paddingBottom: 5,
},
valorTexto:{
  color: '#7B68EE',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
areaUtilitario:{
  flexDirection: 'column', 
  alignItems: 'center'
},
areaRadio:{
  flexDirection: 'row', 
  alignItems: 'center',
 
},
botao:{
  backgroundColor: '#6A5ACD',
  width: '60%',
  alignSelf: "center",
  height: 50,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginTop: 20,
  marginBottom: 20,
},
botaoTexto:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF'
},
input:{
borderWidth: 1.5,
borderColor: '#000',
width: '90%',
borderRadius: 5,
padding: 10,
marginBottom: 5,
justifyContent: "center",
marginHorizontal: 5,
alignSelf: "center",
backgroundColor: '#fff',
height: 45,
},
titulo:
{
  fontSize: 22,
  color: "#000",
  marginLeft: 23,
  marginTop: 15,
  fontWeight: 'bold'
}
});

