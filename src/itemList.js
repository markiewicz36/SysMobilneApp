import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, StatusBar, Modal, Icon, TouchableHighlight } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function ItemList({ item }) {
    return (

        <View style={styles.list}>
            { item.price > 0 ? <Text style={styles.textG}>{item.name} : {item.price} $ <Text style={{color: '#C0C0C0'}}>{item.category}</Text></Text>
                : <Text style={styles.textR}>{item.name} : {item.price} $ <Text style={{color: '#C0C0C0'}}>{item.category}</Text></Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection: 'row',
    },
    textG: {
        marginLeft: 10,
        color: '#007db1'
    },
    textR: {
        marginLeft: 10,
        color: 'red'
    },
    icon: {
        marginLeft: 250,
    }
})