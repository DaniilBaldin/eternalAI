import React, { useState } from 'react';
import { Router } from './routes/Router';

import { PricingContext } from './utils/Context';

function App() {
    const [isPricing, setIsPricing] = useState<boolean>(false);
    const [isSubscribe, setIsSubscribe] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    isPricing || isSubscribe || isSuccess
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');

    return (
        <PricingContext.Provider
            value={{
                isPricing,
                setIsPricing,
                isSubscribe,
                setIsSubscribe,
                isSuccess,
                setIsSuccess,
            }}
        >
            <Router />
        </PricingContext.Provider>
    );
}

export default App;
