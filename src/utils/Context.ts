/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';

export type Context = {
    isPricing: boolean;
    isSubscribe: boolean;
    isSuccess: boolean;
    setIsPricing: (isPricing: boolean) => void;
    setIsSubscribe: (isSubscribe: boolean) => void;
    setIsSuccess: (isSuccess: boolean) => void;
};

export const PricingContext = createContext<Context>({
    isPricing: false,
    isSubscribe: false,
    isSuccess: false,
    setIsPricing: () => {},
    setIsSubscribe: () => {},
    setIsSuccess: () => {},
});

export const useGlobalContext = () => useContext(PricingContext);
