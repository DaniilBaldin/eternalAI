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
    isMenuShow: boolean;
    setIsMenuShow: (isMenuShow: boolean) => void;
    isLoginShow: boolean;
    setIsLoginShow: (isLoginShow: boolean) => void;
    isSignupShow: boolean;
    setIsSignUpShow: (isSignupShow: boolean) => void;
    isConsent: boolean;
    setIsConsent: (isConsent: boolean) => void;
};

export const GlobalContext = createContext<Context>({
    isPricing: false,
    isSubscribe: false,
    isSuccess: false,
    user: { email: '', password: '' },
    isMenuShow: false,
    isLoginShow: false,
    isSignupShow: false,
    isConsent: false,
    setIsPricing: () => {},
    setIsSubscribe: () => {},
    setIsSuccess: () => {},
    setUser: () => {},
    setIsMenuShow: () => {},
    setIsLoginShow: () => {},
    setIsSignUpShow: () => {},
    setIsConsent: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
