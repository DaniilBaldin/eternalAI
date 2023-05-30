/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';

export type Context = {
    isPricing: boolean;
    isSubscribe: boolean;
    isSuccess: boolean;
    user: { email: string; password: string };
    setIsPricing: (isPricing: boolean) => void;
    setIsSubscribe: (isSubscribe: boolean) => void;
    setIsSuccess: (isSuccess: boolean) => void;
    setUser: (user: { email: string; password: string }) => void;
};

export const GlobalContext = createContext<Context>({
    isPricing: false,
    isSubscribe: false,
    isSuccess: false,
    user: { email: '', password: '' },
    setIsPricing: () => {},
    setIsSubscribe: () => {},
    setIsSuccess: () => {},
    setUser: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
