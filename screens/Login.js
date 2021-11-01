import { KeyboardAvoidingView, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements'

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={[styles.container]}>
        <View style={styles.login__logomarca}>
            <Image source={require('../assets/img/logomarca.png')} />
        </View>

        <View style={styles.login__form}>
            <Input style={styles.login__input} placeholder='Usuário:' leftIcon={<Icon name='user' size={24} color='black'/>} />
            <Input style={styles.login__input} placeholder='Senha:' secureTextEntry={true} leftIcon={<Icon name='lock' size={24} color='black'/>} />
            <TouchableOpacity style={styles.login__button} onPress={()=>navigation.navigate('Mesas')}>
                <Text style={styles.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkbg: {
    backgroundColor: "#333"
  },
  login__logomarca: {
    marginBottom: 10
  },
  login__msg: (text = 'none') => ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginBottom: 15,
    display: text
  }),
  login__form: {
    width: "80%"
  },
  login__input: {
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15
  },
  login__button: {
    padding: 12,
    backgroundColor: "#3486f5",
    alignSelf: "center",
    borderRadius: 5
  },
  login__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333"
  },
});
