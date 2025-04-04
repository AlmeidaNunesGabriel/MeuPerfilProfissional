import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from "./style";
import { ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}></View>
        <Text style={styles.bold}>Sobre Mim</Text>
      
    </ScrollView>
  );
}