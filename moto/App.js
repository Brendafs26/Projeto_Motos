import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home';
import Sobre from './pages/Sobre';

const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }}
        />
    
        <Stack.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          headerShown: false
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
