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
  ]

export default function Mesas({navigation}){
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
    </View>
  );
}
