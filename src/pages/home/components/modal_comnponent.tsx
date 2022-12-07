import React from "react";
import MaskInput from 'react-native-mask-input';
import {StyleSheet, Text, View, Modal, Pressable, GestureResponderEvent, NativeSyntheticEvent, TextInput } from 'react-native';
export interface IModalProps{
  isModalVisible: boolean,
  number: string,
  name: string,
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onRequestClose: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  onChangeNumber(masked: string, unmasked: string, obfuscated: string): void;
}

export const ModalComponent : React.FC<IModalProps> = ({isModalVisible, 
  onPress, 
  onRequestClose, 
  onChangeNumber, 
  onChangeText, 
  name, 
  number}) => {
  
  return (
    <View>
      <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Adicionar Contato</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              keyboardType="default"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              onChangeText={onChangeText}
            />
          <MaskInput style={styles.input}
            value={number}
            keyboardType="numeric"
            onChangeText={onChangeNumber}
              mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPress}
            >
              <Text style={styles.textStyle}>Cadastrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: '90%',
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
