import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homes from '../screens/Homes';
import Quize from '../screens/Quize';
import Result from '../screens/Result';

const StackNavigtor = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: 'true',
        animationTypeForReplace: 'push',
        Animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Home" component={Homes} />
      <Stack.Screen name="Quiz" component={Quize} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export default StackNavigtor;
