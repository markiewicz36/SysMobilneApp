import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/home'

import About from '../screens/about'

import Header from '../src/header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'Home'} />,
            }
        }
    },

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: '#eee' , height: 60},
    }
});

export default HomeStack;