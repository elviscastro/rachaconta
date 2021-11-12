import { KeyboardAvoidingView, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <View >
            <Image style={styles.logoShape} source={require('../assets/img/logo.jpeg')} />
        </View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.login__form}>
            <Input style={styles.login__input} placeholder='Usuário' leftIcon={<Icon name='user' size={24} color='black'/>} />
            <Input style={styles.login__input} placeholder='Senha' secureTextEntry={true} leftIcon={<Icon name='lock' size={24} color='black'/>} />
            <TouchableOpacity style={styles.login__button} onPress={()=>navigation.navigate('Main')}>
                <Text style={styles.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0BCC4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkbg: {
    backgroundColor: "#333"
  },
  login__logomarca: {
    marginBottom: 10,
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
    marginBottom: 15,
    borderRadius: 5,
    height:40

  },
  login__button: {
    padding: 12,
    backgroundColor: '#054DF4',
    alignSelf: "center",
    borderRadius: 10,
    width: 150
  },
  login__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
    textAlign: 'center'
  },

  logoShape: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginLeft: 40,
    marginBottom: 16,
  },
  
  viewLogin: {
    width: 100,
    marginTop: 100,
    display: 'flex',
  },

  title:{
    fontSize:32,
    marginBottom: 40,
    marginTop: 40,
    color: '#fff',
    fontWeight: 600
  }
});
