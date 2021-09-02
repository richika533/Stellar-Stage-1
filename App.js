import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';

const Stack= createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dailypic" screenOptions={{
        headerShown: true
      }}>
       <Stack.Screen name= "DailyPic" component={DailyPicScreen}/>
       <Stack.Screen name= "SpaceCrafts" component={SpaceCraftsScreen}/>
       <Stack.Screen name= "StarMap" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
