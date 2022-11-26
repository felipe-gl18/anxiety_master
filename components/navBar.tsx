import {View, StyleSheet} from 'react-native';

import {  useNavigation  } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function NavBar(){
    const navigation = useNavigation();

    return(
        <View style={styles.NavBar}>
            <Icon name='home' onPress={() => navigation.navigate('Home' as never, {} as never)} style={styles.icon} />
            <Icon name='warning' onPress={() => navigation.navigate('Message' as never, {} as never)} style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    NavBar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    icon: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#1E4231',
        fontSize: 20,
        width: 100,
        lineHeight: 50,
    }
})