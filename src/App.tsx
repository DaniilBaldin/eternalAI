import React, { useState } from 'react';
import { Router } from './routes/Router';

import { GlobalContext } from './utils/Context';

function App() {
    const [isPricing, setIsPricing] = useState<boolean>(false);
    const [isSubscribe, setIsSubscribe] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [user, setUser] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });

    isPricing || isSubscribe || isSuccess
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');

    return (
        <GlobalContext.Provider
            value={{
                isPricing,
                setIsPricing,
                isSubscribe,
                setIsSubscribe,
                isSuccess,
                setIsSuccess,
                user,
                setUser,
            }}
        >
            <Router />
        </GlobalContext.Provider>
    );
}

export default App;
