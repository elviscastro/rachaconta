import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import Mesas from './screens/Mesas'
import CriarMesa from './screens/CriarMesa'
import MesasNovo from './screens/MesasNovo'
import MesaDetalhes from './screens/MesaDetalhes'
import CriarUsuario from './screens/usuarios/CriarUsuarios'
import Main from './screens/modulos/Main'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Mesas" component={Mesas} />
        <Stack.Screen name="CriarMesa" component={CriarMesa} />
        <Stack.Screen name="MesasNovo" component={MesasNovo} />
        <Stack.Screen name="MesaDetalhes" component={MesaDetalhes} />
        <Stack.Screen name="CriarUsuario" component={CriarUsuario} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
