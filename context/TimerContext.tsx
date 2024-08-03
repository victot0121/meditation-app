import { createContext, Dispatch, SetStateAction , ReactNode, useState, Children} from 'react'


interface TimerContextType{
    duration: number;
    setDuration : Dispatch<SetStateAction<number>>;
}


export const TimerContext = createContext<TimerContextType>({
    duration: 10,
    setDuration: ()=>{},
}) 

interface TimeProviderProps{
    children: ReactNode;
}


const TimeProvider = ({children}: TimeProviderProps) =>{
    const [duration, setDuration] = useState(10);

    return(
       <TimerContext.Provider value={{duration, setDuration}}>
           {children}
       </TimerContext.Provider>
    )
}

export default TimeProvider