import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Category({ changeCategory, item }) {
  return (
    <TouchableOpacity onPress={() => changeCategory(item)}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  }
});