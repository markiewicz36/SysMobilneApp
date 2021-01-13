import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator, StatusBar, Modal, Icon, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const image = { uri: "https://i.pinimg.com/originals/2b/f9/73/2bf973e03ef8069d1f3f7bcf511f4847.gif" };


export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Welcome to Wydatec!</Text>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#ffffff00"  onPress={() => navigation.navigate('Home')}>
                <View style={styles.test}>
                    <MaterialIcons name="not-started" size={35} color="white" />
                    <Text style={{ fontSize: 35, color: 'white' }}>start!</Text>
                </View>
            </TouchableHighlight> 
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    test: {
        justifyContent: "center",
        flexDirection: "row",
        padding: 50,
    },
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      }
  })