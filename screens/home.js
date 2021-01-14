import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator, StatusBar, Modal, Icon, TouchableHighlight } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';
import { VictoryPie } from 'victory-native';
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Category from '../src/category'
import Welcome from './welcome'

import * as firebase from 'firebase';
import 'firebase/firestore';
import { set } from 'react-native-reanimated';
import ItemList from '../src/itemList';

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

export default function Home({ navigation }) {

  const [saldo, setSaldo] = useState([]);
  const [text, setText] = useState('');
  const [pricex, setPrice] = useState('');
  const [categoty, setCategoty] = useState('---');
  const [modalOpen, setModalOpen] = useState(false);
  const [animating, setAnimating] = useState(true);
  
  const categories = ['Test', 'Test1', 'Test2']; 

  var totalPrice = parseFloat(0.0);

  saldo.forEach((item) => {
    totalPrice += parseFloat(item.price);
  })

  const changeHandler = (val) => {
    setText(val)
  }
  const changePrice = (val) => {
    val = val.replace(/,/g, '.');
    setPrice(parseFloat(val))
  }

  const changeCategory = (val) => {
    setCategoty(val);
    setModalOpen(false);
  }

  const getItems = () => {
    firebase.firestore()
      .collection('items')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setSaldo((prevSaldo) => {
            return [
              { name: documentSnapshot.data().name, price: documentSnapshot.data().price, key: documentSnapshot.data().key }, ...prevSaldo
            ]
          })
        });
      });

      firebase.firestore()
      .collection('category')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          categories(() => {
            return [
              { name: documentSnapshot.data().name},
            ]
          })
        });
      });

      
  }

  const addToFirebase = (text, pricex, categotyx) => {
    var x = Math.random().toString();
    if (text.length > 3 && pricex != '' && categotyx != '---') {
      firebase.firestore().collection('items')
        .add({
          name: text,
          price: pricex,
          key: x,
          category: categotyx,
        })
      setSaldo((prevSaldo) => {
        return [
          { name: text, price: parseFloat(pricex), key: x, category: categotyx }, ...prevSaldo
        ]
      })
    }
    else {
      Alert.alert('OOOPS!', 'Fill all inputs!', [
        { text: 'OK' }
      ])
    }
  };

  const addToFirebaseMinus = (text, pricex, categotyx) => {
    var x = Math.random().toString();
    var number = '-' + pricex;
    if (text.length > 3 && pricex != '' && categotyx != '---') {
      firebase.firestore().collection('items')
        .add({
          name: text,
          price: number,
          key: x,
          category: categotyx,
        })
      setSaldo((prevSaldo) => {
        return [
          { name: text, price: parseFloat(number), key: x, category: categotyx }, ...prevSaldo
        ]
      })
    }
    else {
      Alert.alert('OOOPS!', 'Fill all inputs!', [
        { text: 'OK' }
      ])
    }
  };

  useEffect(() => {
    getItems()
  }, [])

  setTimeout(() => { setAnimating(false) }, 1000)

  return (
    <View style={globalStyles.container}>

      <StatusBar hidden />

      {animating == true ? <ActivityIndicator size="large" animating={animating} /> :
        <View style={styles.header}>
          {totalPrice > 0 ? <Text style={styles.textG}>Total: {parseFloat(totalPrice.toFixed(2))} $</Text>
            : <Text style={styles.textR}>Total: {parseFloat(totalPrice.toFixed(2))} $</Text>}
        </View>}

      <FlatList
        data={saldo}
        renderItem={({ item }) => (<ItemList item={item} />)}
      />

      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
        <Text style={{fontSize: 35, justifyContent: 'center', alignItems: 'center',color: "#D6A65E" }}>Choose category:</Text>
        <FlatList
                data={categories}
                renderItem={({ item }) => (<Category item={item} changeCategory={changeCategory}/>)}
              />

        </View>
      </Modal>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
        <AntDesign name="switcher" size={24} color="#D6A65E" onPress={() => setModalOpen(true)} style={styles.modalToggle} />
        <Text onPress={() => setModalOpen(true)} style={{ fontSize: 20, color: "#D6A65E" }}>Choosed category: {categoty}</Text>
      </View>

      <TextInput style={styles.input} placeholder='add text...' onChangeText={changeHandler} />
      <TextInput style={styles.input} keyboardType='numeric' placeholder='add price...' onChangeText={changePrice} />

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
        <TouchableHighlight activeOpacity={0.6} underlayColor="#ffffff00" onPress={() => addToFirebase(text, pricex, categoty)}>
          <View style={styles.test}>
            <MaterialIcons name="attach-money" size={35} color="#28655E" />
            <Text style={{ fontSize: 35, color: '#28655E' }}>revenue</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />

        <TouchableHighlight activeOpacity={0.6} underlayColor="#ffffff00" onPress={() => addToFirebaseMinus(text, pricex, categoty)}>
          <View style={styles.test}>
            <MaterialIcons name="money-off" size={35} color="#B63F37" />
            <Text style={{ fontSize: 35, color: '#B63F37' }}>expense</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    //</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    height: 80,
    paddingTop: 30,
  },
  textG: {
    textAlign: 'center',
    color: '#28655E',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textR: {
    textAlign: 'center',
    color: '#B63F37',
    fontSize: 30,
    fontWeight: 'bold'
  },
  chart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  test: {
    flexDirection: 'row',
  },
  space: {
    width: 60, // or whatever size you need
    height: 20,
  },
})