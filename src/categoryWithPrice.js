import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';


export default function CategoryWithPrice({ item2, item }) {

  return (
    <TouchableOpacity onPress={() => changeCategory(item)}>
      <Text style={styles.item}>{item} total: {item2} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 6,
    marginTop: 6,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    color: '#202020'
  }
});