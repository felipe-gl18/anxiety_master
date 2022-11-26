import { useContext } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { InitialContext } from '../context/initialContext';
import {useNavigation} from '@react-navigation/native'

import { StepComponent } from './stepComponent';
import { StepsProvider } from '../context/stepsContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

interface InitalProps{
  cicleStarted: boolean;
}


export function InitialComponent(){
  
  const {
    cicleStarted,
    startCicle,
  } = useContext(InitialContext);
  
    return(
        <View style={styles.container}>
          {
            cicleStarted? (
              <StepsProvider>
                <StepComponent />
              </StepsProvider>
            ):(
              <View style={styles.initial}>
                <View style={styles.welcome}>
                  <Text style={styles.welcomePrincipalText}>Welcome to Anxiety Master</Text>
                  <Text style={styles.welcomeSecondaryText}>if you're having an anxiety crisis start the treatment.</Text>
                </View>
                <Pressable style={styles.startButton} onPress={ () => startCicle()}>
                  <Text style={styles.startButtonText}>Start treatment</Text>
                </Pressable>
              </View>
            )
          }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },

    initial: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      welcome: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      welcomePrincipalText: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#357453',
      },
    
      welcomeSecondaryText: {
        textTransform: 'uppercase',
    
        fontWeight: 'bold',
        opacity: 0.4,
        
        marginTop: 10,
        marginBottom: 100,
      },
    
      startButton: {
        alignItems: "center",
        justifyContent: "center",
    
        backgroundColor: '#1E4231',
    
        width: 160,
        height: 50,
    
        borderRadius: 5,
      },
    
    
      startButtonText: {
        color: "white",
        fontSize: 24,
      },
})