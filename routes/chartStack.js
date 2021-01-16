import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Chart from '../screens/chart'
import Header from '../src/header'
import React from 'react'

const screens = {
    Chart: {
        screen: Chart,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'About'} />,
            }
        }
    }
}

const ChartStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: '#eee' , height: 60}
    }
});

export default ChartStack;