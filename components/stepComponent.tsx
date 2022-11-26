import { useContext, useEffect, useState } from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import { InitialContext } from '../context/initialContext';
import { StepsContext } from '../context/stepsContext';
import { NextButton } from './nextButtonComponent';
import { XPLevelUp } from './xpLevelComponent';
import { Audio } from 'expo-av';

export function StepComponent(){
    const {
      stepsLength,
      stepsText,
      count,
      countAdd,
      resetCount,
      userXP,
      userXPUpLevel,
      resetUserXP,
      stopCicle
    } = useContext(StepsContext);

    const [sound, setSound] = useState<Audio.Sound|null>(null);

    async function playStepOneAudio() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/audios/stepOne.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
         
  }

  async function playStepTwoAudio() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/audios/stepTwo.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
      

  }

  async function playStepThreeAudio() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/audios/stepthree.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
         
  }

  async function playStepFourAudio() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/audios/stepFour.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
         
  }

  async function playStepFiveAudio() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/audios/stepFive.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
         
  }

  async function playStepSixAudio() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/audios/stepSix.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
         
  }

  useEffect(() => {
  
      if(count === 0){
          playStepOneAudio();
      }

      if(count === 1){
          playStepTwoAudio()
      };

      if(count === 2){
          playStepThreeAudio();
      }

      if(count === 3){
          playStepFourAudio();
      }

      if(count === 4){
          playStepFiveAudio();
      }

      if(count === 5){
          playStepSixAudio();
      }
    }, [count])


    return(
        <View>
             <XPLevelUp />
             <Text style={styles.stepsText}>{stepsText}</Text>
             <NextButton />
        </View>
    );
}

const styles = StyleSheet.create({
      stepsText: {
        
        width: 360,
    
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    
        backgroundColor: "#DEEFE7",
        color: '#8E969E',
    
        borderRadius: 5,
    
        fontSize: 20,
      }, 
})