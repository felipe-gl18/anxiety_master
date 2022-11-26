import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, createContext, useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import { steps } from './steps';

import { InitalProvider, InitialContext } from './context/initialContext';
import { StepComponent } from './components/stepComponent';

interface InitialData{
  cicleStarted: boolean;
  setCicleStarted: ()=>void;
}

export type RootStackParamList = {
  Home: undefined;
  Message: undefined;
  NextButton: undefined;
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InitialComponent } from './components/initialComponent';
import { FinalComponent } from './components/finalComponent';
import { NavBar } from './components/navBar';

const RockStack = createNativeStackNavigator<RootStackParamList>();

export default function App({}:InitialData) {

  const {cicleStarted} = useContext(InitialContext);
  
  return (
    <NavigationContainer>
            <InitalProvider>
              <RockStack.Navigator initialRouteName='Home'>
                <RockStack.Screen name="Home" component={InitialComponent} />
                <RockStack.Screen name="Message" component={FinalComponent} />
              </RockStack.Navigator>
            </InitalProvider>
        <NavBar />  
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
