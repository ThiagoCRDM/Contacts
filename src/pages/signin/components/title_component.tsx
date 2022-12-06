import React, { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

export interface ITitlePorps {
  text:string;
}

export const Title : React.FC<ITitlePorps> = ({text}) => {


  return (
    <Text style={styles.title}>
      {text}
    </Text>
  );
  
}


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
  },
});