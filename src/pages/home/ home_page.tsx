import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ButtonAdd } from './components/buttonadd_component';

export interface IHome {

}

export const Home : React.FC<IHome> = () => {
  return (
    <View style={styles.container}>
      <View style= {styles.bar}>
        <ButtonAdd />
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
});
