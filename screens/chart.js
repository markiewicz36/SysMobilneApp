import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import CategoryWithPrice from '../src/categoryWithPrice'

import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

import * as firebase from 'firebase';
import 'firebase/firestore';

import { VictoryPie } from 'victory-native';

const firebaseConfig = {
    apiKey: "AIzaSyBiMVVhnRFxNly3f291z1QIgQnlngrMyvM",
    authDomain: "sysmobapp.firebaseapp.com",
    projectId: "sysmobapp",
    storageBucket: "sysmobapp.appspot.com",
    messagingSenderId: "266609094197",
    appId: "1:266609094197:web:ecbdb8bbeb35a96bde0b7c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function Chart() {
    const [items, setItems] = useState([]);
    const [animation, setAnimation] = useState(1);

    var debt = 0;
    var shopping = 0;
    var fastfood = 0;
    var health = 0;
    var car = 0;
    var home = 0;
    var passion = 0;

    var x1 = "";
    var x2 = "";

    const getItems = () => {
        setItems([]);
        debt = 0;;
        shopping = 0;
        fastfood = 0;
        health = 0;
        car = 0;
        home = 0;
        passion = 0;

        firebase.firestore()
            .collection('items')
            .orderBy('createdAt')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().price < 0){
                         x1 = documentSnapshot.data().price;
                         x2 = x1.substring(1);
                    setItems((prevItems) => {
                        return [
                            { name: documentSnapshot.data().name, price: x2, key: documentSnapshot.data().key, category: documentSnapshot.data().category }, ...prevItems
                        ]

                    })
                   }
                });
            });

            setAnimation(1);
    }


    useEffect(() => {
        getItems()
    }, [])

    items.forEach((item) => {
        if (item.category == 'Debt') { debt +=  parseFloat(item.price) }
        if (item.category == 'Shopping') { shopping +=  parseFloat(item.price) }
        if (item.category == 'FastFood') { fastfood +=  parseFloat(item.price) }
        if (item.category == 'Health') { health +=  parseFloat(item.price) }
        if (item.category == 'Car') { car +=  parseFloat(item.price) }
        if (item.category == 'Home') { home +=  parseFloat(item.price) }
        if (item.category == 'Passion') { passion +=  parseFloat(item.price) }
    })

    var sampleData = [
        { x: "Debt", y: debt },
        { x: "Shopping", y: shopping },
        { x: "FastFood", y: fastfood },
        { x: "Health", y: health },
        { x: "Car", y: car },
        { x: "Home", y: home },
        { x: "Passion", y: passion },
    ]

    setTimeout(() => { setAnimation(0) }, 2000)

    return (
        <View style={globalStyles.container}>

          <FontAwesome name="refresh" size={24} color="black"  onPress={() => getItems()}/>
        
        {animation == 1 ? <ActivityIndicator size="large" animating={true} /> :
        <View>
                    <VictoryPie
                    width={380}
                    height={380}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={sampleData}
                />

<FlatList
            data={sampleData}
            renderItem={({ item }) => (<CategoryWithPrice item={item.x} item2={item.y}/>)} />
                </View>
            }
            </View>
    );
}

