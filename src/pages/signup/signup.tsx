import React from "react";
import { KeyboardAvoidingView, StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { SignUpController } from "../../controller/signuup_controller";
import { Title } from "../signin/components/title_component";

export interface ISignin {
 
}
export const Signup : React.FC = () => {
  const controller = new SignUpController();
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style= {styles.login}>
          <Title text="CRIAR CONTA"/>
        </View>
        <View style={styles.form}>
          <TextInput
              style={styles.input}
              placeholder="Nome"
              keyboardType="default"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              onChangeText={() => {}}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              onChangeText={() => {}}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              //keyboardType="visible-password"
              textContentType="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={() => {}}
            />

            <TouchableOpacity style={styles.buttonSubmit} onPress= {(e) => {
                  controller.create({name:"Thiago", email:"thiagocesarmata@gmail.com", password:"as1d3asdda3"})
            }}>
              <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
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