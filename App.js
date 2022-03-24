import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';

const Stack = createNativeStackNavigator();

function Myapp() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tela1" component={Tela1} />
          <Stack.Screen name="Tela2" component={Tela2} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default Myapp;
