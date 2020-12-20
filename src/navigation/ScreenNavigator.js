import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from '../screens/dashboard/Dashboard';
import {DropDown} from '../screens/dropdown/Dropdown';
import {ImageScreen} from '../screens/imageScreen/ImageScreen';
import {options} from '../screens/options/Option';
import { Parent } from '../screens/parent/Parent';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="options" component={options} options={{headerShown:false}} />
      <Stack.Screen name="Parent" component={Parent} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="Dropdown" component={DropDown} options={{headerShown:false}} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

