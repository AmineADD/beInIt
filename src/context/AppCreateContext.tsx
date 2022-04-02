import { createContext, Dispatch, SetStateAction, useContext } from 'react';


type AppCreateContextType = {
    isConnected: boolean;
};

const AppCreateContext = createContext<AppCreateContextType>({ isConnected: false });

export const AppCreateContextProvider = AppCreateContext.Provider;

export const useAppCreateContext = () => {
    const context = useContext(AppCreateContext);
    if (!context) {
        throw new Error(
            'error by Context AppCreateContext'
        );
    }
    return context;
};