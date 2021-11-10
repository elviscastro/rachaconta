import React from 'react';
import { View } from 'react-native';
import { Button, Input, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Mesa',
    subtitle: 'Configuração de Mesa',
    path: 'MesasNovo'
  },
  {
    name: 'Usuário',
    subtitle: 'Configuração de usuário',
    path: 'CriarUsuario'
  }
]

export default function Main({navigation}){
  return (
    <View>
    <View>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={()=>navigation.navigate(l.path)}>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
    <Button
    title="Voltar"
    onPress={()=>navigation.navigate('Login')}
    />
    </View>
  );
}
