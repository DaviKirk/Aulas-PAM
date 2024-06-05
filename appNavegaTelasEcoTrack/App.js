
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import TelaLogin from './src/Telas/TelaLogin';
import TelaCadastro from './src/Telas/TelaCadastro';
import Home from './src/Telas/Home';
import TelaConfig from './src/Telas/TelaConfig';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaCadastro'>

        <Stack.Screen name="TelaLogin" component={TelaLogin}></Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="settings" component={TelaConfig}></Stack.Screen>
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{ headerShown: false }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
