import {useContext, ReactNode, createContext, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface InitalData{
    cicleStarted: boolean;
    startCicle: ()=>void;
    stopCicle: ()=>void;
}

interface InitialProps{
    children: ReactNode;
}

export const InitialContext = createContext({} as InitalData);

export function InitalProvider({children}: InitialProps){

    const navigation = useNavigation();

    const [cicleStarted, setCicleStarted] = useState(false);
    const [finishedModalVisible, setFinishedModalVisible] = useState(false);

    function startCicle(){
        setCicleStarted(true);
    }

    function stopCicle(){
        navigation.navigate('Message' as never, {} as never);

        setCicleStarted(false);

    }

    return(
        <InitialContext.Provider
        value={{
            cicleStarted,
            startCicle,
            stopCicle,            
        }}>
            {children}
        </InitialContext.Provider>
    );
}