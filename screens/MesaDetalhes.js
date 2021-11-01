import React from 'react';
import { View } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements'

const list = [
    {
      title: 'Mesa #03',
      n1: 'Cerveja',
      value_n1: 5.90,
      qnt_n1: 2,
      n2: 'Porção de Batatas',
      value_n2: 12.90,
      qnt_n2: 1,
      subtotal: 24.7
    },
  ]

export default function CriarMesa({navigation}){
  return (
    <View>
    {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
          <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <Text>{item.n1} - Qtd: {item.qnt_n1} - R$ {item.value_n1}</Text>
              <Text>{item.n2} - Qtd: {item.qnt_n2} - R$ {item.value_n2}</Text>
              <Text>SUBTOTAL R$ {item.subtotal}</Text>
          </ListItem.Content>
          <ListItem.Chevron />
      </ListItem>
      ))
    }
    <Button
    title="Encerrar mesa"
    color="red"
    onPress={()=>navigation.navigate('Mesas')}
    />
    </View>
  );
}
