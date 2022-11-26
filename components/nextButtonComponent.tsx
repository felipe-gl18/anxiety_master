import {useContext} from 'react';
import { Pressable, Text, StyleSheet } from "react-native";
import { StepsContext } from '../context/stepsContext';
import Icon from 'react-native-vector-icons/Octicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export function NextButton(){
    const {
        count,
        stepsLength,
        stopCicle,
        resetCount,
        resetUserXP,
        countAdd,
        userXPUpLevel,
    } = useContext(StepsContext);

    return(
        <Pressable style={styles.nextStepButton} 
            onPress={ () => {
                count === stepsLength-1 ? (
                    stopCicle(), resetCount(), resetUserXP()
                ):(
                    countAdd(), userXPUpLevel()
                )
            }
            }
        >
            <Text style={styles.nextStepButtonText}>Next</Text>
            <Icon name="check" style={styles.checkIcon} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    nextStepButton: {
        alignItems: 'center',
        justifyContent: 'center',
    
        flexDirection: 'row',
    
        width: 140,
        height: 45,
    
        backgroundColor: '#1E4231',
    
        borderRadius: 5,
    
        marginTop: 15,
      },
    
      checkIcon: {
        fontSize: 20,
        color: 'white',
      },
    
      nextStepButtonText: {
        color: 'white',
        fontSize: 20,
        marginRight: 10,
      }
   
})