import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Recycle from './pages/Recycle';
import Main from './Main'


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="home" component={Main} />
        <Stack.Screen name ='Recycle' component={Recycle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;