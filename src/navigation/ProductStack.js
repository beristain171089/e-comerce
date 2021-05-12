import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';

import Home from '../screens/Product/Home';

const Stack = createStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: {
          backgroundColor: colors.bgDark
        },
        cardStyle: {
          backgroundColor:  colors.bgLight
        }
      }}
    >
      <Stack.Screen
        name='home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
