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

export default function CriarMesa({navigation}){
  return (
    <View>
    {
      <Input placeholder='Nome da Mesa' />
    }
    <Button
    title="Salvar"
    onPress={()=>navigation.navigate('MesasNovo')}
    />
    </View>
  );
}
