import React from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements'

const list = [
    {
      title: 'Usuario #01'
    },
    {
      title: 'Usuario #02'
    },
  ]

export default function CriarUsuario({navigation}){
  return (
    <View>
    {
      <Input placeholder='Nome' />
    }
    <Button
    title="Salvar"
    onPress={()=>navigation.navigate('UsuarioNovo')}
    />
    </View>
  );
}
