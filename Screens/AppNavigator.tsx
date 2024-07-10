import { View, Text } from 'react-native'
import React from 'react'
import FirstScreen from './FirstScreen/FirstScreen';
import SecondScreen from './SecondScreen/SecondScreen';
import UploadScreen from './HomeScreen/uploadScreen'
import MainTabNavigator from './MainTabNavigator/MainTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';


export type StackParamList = {
  FirstScreen: undefined;
  MainTabNavigator : undefined;
  SecondScreen : undefined;
  UploadScreen: undefined;
};

const Stack = createStackNavigator <StackParamList>();

const AppNavigator = () => {
  return (
    
    <Stack.Navigator> 
      <Stack.Screen
      name="FirstScreen"
      component={FirstScreen}
      options={{ headerShown: false }} />
      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{ headerShown: false }} />
        <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{ headerShown: true, headerTransparent: true,title: ''}} />
        <Stack.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{ headerShown: false }} />
     </Stack.Navigator>
  
  )
}

export default AppNavigator