import React, { useState }from 'react';
import {Alert, FlatList, StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { ButtonAdd } from './components/buttonadd_component';
import { ModalComponent } from './components/modal_comnponent';

export interface IHome {

}

export const Home : React.FC<IHome> = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  return (
    <View style={styles.container}>
      <ModalComponent
      onChangeNumber={
        (masked, unmasked) => {
          setPhone(masked); // you can use the unmasked value as well
  
          // assuming you typed "9" all the way:
          console.log(masked); // (99) 99999-9999
          console.log(unmasked); // 99999999999
        }
      }
      onChangeText={(value)=>{
        setName(value)
        console.log(value)
      }}
      name={name}
      number={phone}
      isModalVisible = {modalVisible}
      onPress={()=>{}}
      onRequestClose={()=> {
        Alert.alert("Modal foi fechado.");
          setModalVisible(!modalVisible);
      }}
      />
      <View style= {styles.bar}>
        <ButtonAdd onPress = { (e) => setModalVisible(true)} />
      </View>
      <View>
      <FlatList
        ItemSeparatorComponent={()=> <View style={{width:'100%', borderBottomWidth:1, borderColor:'#9D9E9F'}}/>}
        data={[
          {"id": "1","name": 'Devin', "number":"(64) 9 9986-7333"},
          {"id": "6","name": 'Joel', "number":"(64) 9 9986-7333"},
          {"id": "3","name": 'Dominic', "number":"(64) 9 9986-7333"},
          {"id": "9","name": 'John', "number":"(64) 9 9986-7333"},
          {"id": "5","name": 'James', "number":"(64) 9 9986-7333"},
          {"id": "4","name": 'Jackson', "number":"(64) 9 9986-7333"},
          {"id": "10","name": 'Jillian', "number":"(64) 9 9986-7333"},
          {"id": "2","name": 'Dan', "number":"(64) 9 9986-7333"},
          {"id": "11","name": 'Jimmy', "number":"(64) 9 9986-7333"},
          {"id": "12","name": 'Julie', "number":"(64) 9 9986-7333"},
        ].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}
        renderItem={({item}) => 
        <View key={item.id}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.number}</Text>
        </View>
      }
      />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { 
    width: '100%',
    flexDirection:'row-reverse',
    marginTop: 22
  },
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor:'#E1E2E4',
   padding: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
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
