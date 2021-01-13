import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Home from './screens/home'
import Navigator from './routes/drawer';


export default props => {
  let [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
      return <Navigator />;
  }
};