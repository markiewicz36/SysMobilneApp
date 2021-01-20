import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={styles.styl}>
      <Text style={globalStyles.titleText}>Wydatec</Text>
      <Text>v 1.0</Text>
      <Text>application created by </Text>
      <Text style={globalStyles.titleText}>Michał Markiewicz</Text>
      <Text>224507</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
styl: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  borderWidth: 1,
  borderColor: '#f2f2f2',
  padding: 10,
  borderRadius: 10,
  alignSelf: 'center'
}})