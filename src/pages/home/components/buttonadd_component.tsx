import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View, Text, GestureResponderEvent} from "react-native";

export interface IButtonAdd {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
export const ButtonAdd : React.FC<IButtonAdd> = ({onPress}) => {

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttontext}>Adicionar contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#59BFFF",
    alignSelf:"center",
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  buttontext:{
    textAlign:"center",
    fontSize:20,
    fontWeight:'bold',
    color:"#fff",
  },
});


