import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigtor from './stackNavigtor';

const RootStack = () => {
  return (
    <NavigationContainer>
      <StackNavigtor />
    </NavigationContainer>
  );
};
export default RootStack;
