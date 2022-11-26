import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Message'>

export function FinalComponent({route, navigation}: Props){
    return(
        <View style={styles.final}>
            <View style={styles.message}>
                <Text style={styles.messagePrincipalText}>Anxiety Master</Text>
                <Text style={styles.messageSecondaryText}>
                  If you are using this app, as a solution to your anxiety, please stop,
                  this app is to help you in an anxiety crisis, with basic techniques,
                  focusing on easing the situation, please seek professional help, and don't be
                  ashamed to share your situation with people close to you.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    final: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
      },
    
      message: {
        justifyContent: 'center',
        marginLeft: 25,
      },
    
      messagePrincipalText: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#357453',
      },
    
      messageSecondaryText: {    
        fontWeight: 'bold',
        fontSize: 20,
        opacity: 0.4,
        
        marginTop: 10,
        marginBottom: 100,

        width: 400,
      },
    
      goHomeButton: {
        alignItems: "center",
        justifyContent: "center",
    
        backgroundColor: '#1E4231',
    
        width: 160,
        height: 50,
    
        borderRadius: 5,
      },
    
    
      goHomeButtonText: {
        color: "white",
        fontSize: 24,
      },
})