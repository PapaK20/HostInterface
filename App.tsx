import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppNavigator from './Screens/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';

const App = () => {
  const [loaded, error] = useFonts({
    mon: require('./assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  


  return (
    <NavigationContainer>
         <AppNavigator /> 
 </NavigationContainer>

  )
}

export default App
