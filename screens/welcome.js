import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator, StatusBar, Modal, Icon, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';



export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/wydatec_bg.jpg')} style={styles.image}>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#ffffff00"  onPress={() => navigation.navigate('Home')}>
                <View style={styles.test}>
                    <Text style={{ fontSize: 45, color: 'black' }}>start!</Text>
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