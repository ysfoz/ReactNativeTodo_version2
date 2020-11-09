import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createStore} from 'redux'
import { Provider} from 'react-redux'

import Recycle from './pages/Recycle';
import Main from './Main'
import {reducer,initialState} from './context'


const Stack = createStackNavigator();
const store = createStore(reducer,initialState)

function Router() {
  return (
    <Provider store ={store}>

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
         name="home" 
         component={Main} 
         options={{
           title:'ADD TODO',
           headerStyle:{
             backgroundColor:'#4FE086',
           },
           headerTintColor:'#102027',
           headerTitleStyle:{
             fontWeight:'bold'
           }
          
          }} 
         />
        <Stack.Screen 
        name ='Recycle' 
        component={Recycle} 
        options={{
          title:'Recycle',
          headerStyle:{
            backgroundColor:'#4FE086',
          },
          headerTintColor:'#102027',
          headerTitleStyle:{
            fontWeight:'bold'
          }
          

        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default Router;