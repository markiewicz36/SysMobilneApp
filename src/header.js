import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/wydatec_header.jpg')} style={styles.header}>
            <StatusBar hidden />
            <View style={styles.headerTitle}>
                <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
                <Image source={require('../assets/wydatec_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: '100%',        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        right: 210,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row'
    }
});
