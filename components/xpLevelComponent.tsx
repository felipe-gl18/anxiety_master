import { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { StepsContext } from '../context/stepsContext';

export function XPLevelUp(){

    const {userXP} = useContext(StepsContext)

    return(
        <View style={styles.fullXP}>
              <View style={{
                width: userXP,
                height: 15,

                backgroundColor: 'green',
                borderRadius: 20,
              }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    fullXP: {
        alignSelf: 'center',
        
        marginBottom: 80,
        marginTop: 160,
    
        width: 180,
        height: 15,
    
        backgroundColor: 'lightgreen',
        borderRadius: 20,
      },
})