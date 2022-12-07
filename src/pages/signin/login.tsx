import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { SigninController } from "../../controller/login_controller";
import { NavProps } from "../../routes";
import { Title } from "./components/title_component";

export interface ISignin {
 
}
export const Signin : React.FC<NavProps> = ({navigation}) => {
  const controller = new SigninController();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState("");

  async function login(email:string, password:string){
    setIsLoad(true);  
    const result = await controller.login(email, password);
    setIsLoad(false);  
    if(!result){
      setError("Login invalido")
      console.log(error)
    }
    console.log(result)
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.login}>
        <Title text={"LOGIN"}/>
      </View>
      <View style={styles.form}>
      <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          onChangeText={(value) => {
            setEmail(value)
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          textContentType="password"
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(value) => {
            setPassword(value)
          }}
        />
        
        <TouchableOpacity style={styles.buttonSubmit} onPress= {(e) => login(email, password)}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={(e)=> {
           navigation.navigate('Register')
        }}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f3542',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },
  
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 250,
    paddingBottom: 25
  },

  login: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  },

  buttonSubmit: {
    backgroundColor: '#59BFFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText: {
    color: '#FFF',
    fontSize: 19
  },

  buttonRegister: {
    marginTop: 10
  },

  registerText: {
    color: '#FFF'
  }
});