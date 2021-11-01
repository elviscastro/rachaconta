import React from 'react';
import { View } from 'react-native';
import { ListItem, Button } from 'react-native-elements'

const list = [
    {
      title: 'Mesa #01'
    },
    {
      title: 'Mesa #02'
    },
    {
      title: 'Mesa #03'
    },
  ]

export default function MesasNovo({navigation}){
  return (
    <View>
    {
        list.map((item, i) => (
        <ListItem key={i} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
        ))
    }
    <Button
    title="Criar Mesa"
    onPress={()=>navigation.navigate('CriarMesa')}
    />
    
    <Button
    title="Detalhar mesa"
    onPress={()=>navigation.navigate('MesaDetalhes')}
    />
    </View>
  );
}
