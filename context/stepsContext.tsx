import {useContext, ReactNode, createContext, useState, useEffect} from 'react';
import { InitialContext } from './initialContext';
import {steps} from '../steps';

interface StepsData{
    stepsLength: number;
    stepsText: string;
    count: number;
    countAdd: () => void;
    resetCount: () => void;
    userXP: number;
    userXPUpLevel: () => void;
    resetUserXP: () => void;
    stopCicle: () => void;
}

interface StepsProps{
    children: ReactNode;
    stepsText: string;
}

export const StepsContext = createContext({} as StepsData);

export function StepsProvider({children, stepsText}: StepsProps){

    let stepsLength = steps.length;

    const { stopCicle } = useContext(InitialContext);

    const [count, setCount] = useState(0);
    const [breathing , setBreathing] = useState(true);
    const [breathingCount, setBreathingCount] = useState(4);
    const [userXP, setUserXP] = useState(30);

    function countAdd(){
        setCount(count + 1)
    }

    function resetCount(){
        setCount(0);
    }

    function resetUserXP(){
        setUserXP(0)
    }

    function userXPUpLevel(){
        setUserXP(userXP + 30)
    }

    if(steps[count] === "breathe"){

        if(breathingCount > 0){
          setTimeout(()=>{
            setBreathingCount(breathingCount - 1)
          }, 1000)
        } else if(breathingCount === 0){
          setBreathing(!breathing)
          setBreathingCount(4)
        }
    
        breathing? stepsText = `breathe in for ${breathingCount} seconds.` : stepsText = `breathe out for ${breathingCount} seconds.`
    
    } else {
        stepsText = steps[count]
    }
    
    return(
        <StepsContext.Provider
        value={{
            stepsLength,
            stepsText,
            count,
            countAdd,
            resetCount,
            userXP,
            userXPUpLevel,
            resetUserXP,           
            stopCicle,
            
        }}>
            {children}
        </StepsContext.Provider>
    );
}