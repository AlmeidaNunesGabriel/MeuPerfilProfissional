import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from "./style";
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre Mim</Text>
      <Text>Testando ainda</Text>
    </View>
  );
}