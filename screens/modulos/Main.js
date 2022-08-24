import React from 'react';
import { View } from 'react-native';
import { Button, ListItem } from 'react-native-elements'
import { StyleSheet } from 'react-native';


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
  },
  {
    name: 'Consumo',
    subtitle: 'Consumo',
    path: 'Consumo'
  },
  {
    name: 'Cardapio',
    subtitle: 'Cardapio',
    path: 'Cardapio'
  }
]

export default function Main({navigation}){
  return (
    <View style={styles.container}>
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
    style={styles.button}
    />
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    display: 'flex',

  },
  button:{
    marginTop: 40,
  }
});


