import React from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements'

const list = [
    {
      title: 'Mesa #01'
    },
    {
      title: 'Mesa #02'
    },
  ]

export default function GerenciarMesa({navigation}){
  return (
    <View>
    {
      <Input placeholder='Nome da Mesa' />
    }
    <Button
    title="Adicionar usuario"
    onPress={()=>navigation.navigate('CriarUsuario')}
    />
    <Button
    title="Adicionar Item"
    onPress={()=>navigation.navigate('CriarItem')}
    />
    </View>
  );
}
