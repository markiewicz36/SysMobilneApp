import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import About from '../screens/about'
import Header from '../src/header'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'About'} />,
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: '#eee' , height: 60}
    }
});

export default AboutStack;