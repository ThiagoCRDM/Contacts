import React, { useEffect, useState }from 'react';
import {Alert, FlatList, StyleSheet, Text, View, Modal, Pressable, TouchableOpacity } from 'react-native';
import { ContactsController } from '../../controller/contacts_controller';
import { Account } from '../../models/account';
import { Contact } from '../../models/contact';
import { ButtonAdd } from './components/buttonadd_component';
import { ModalComponent } from './components/modal_comnponent';

export interface IHome {

}

export const Home : React.FC<IHome> = () => {
  const controller = new ContactsController();
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [contacList, setContactList] = useState(Array<Contact>);
  useEffect(()=> {
   controller.getContacts().then((e) => {
      setContactList(e as [Contact]);
   })
   
  }, [])
  return (
    <View style={styles.container}>
      <ModalComponent
      onChangeNumber={
        (masked, unmasked) => {
          setPhone(masked); // you can use the unmasked value as well
        }
      }
      onChangeText={(value)=>{
        setName(value)
      }}
      name={name}
      number={phone}
      isModalVisible = {modalVisible}
      onPress={async ()=>{

        const result = await controller.create({
          name:name,
          number:phone,
          accountId: Account.getInstance().getId()
        });
        setModalVisible(!modalVisible);
        
        setContactList([...contacList, result as Contact])

      }}
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
        data={contacList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}
        renderItem={({item}) => 
        <View key={item.id} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
          <View> 
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.number}</Text> 
          </View>
          <TouchableOpacity style={styles.buttonExcluir} onPress={()=>{
           Alert.alert("Deseja excluir esse contato?", item.name, [{
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
           },{text: "OK", onPress: () => {
            controller.excluir(item);
            contacList.splice(contacList.indexOf(item), 1);
            setContactList([...contacList])
           }}])
          }}>
            <Text style={styles.buttontextExcluir}>Excluir</Text>
          </TouchableOpacity>
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
  buttonExcluir: {
    width: 100,
    
    borderRadius: 100,
    padding: 10,
   
    alignItems: "center",
  },
  buttontextExcluir:{
    alignContent:'center',
    textAlign:"center",
    fontSize:16,
    color:"red",
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
