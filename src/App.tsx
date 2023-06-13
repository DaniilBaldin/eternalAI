import React, { useEffect, useState } from 'react';
import { Router } from './routes/Router';

import { GlobalContext } from './utils/Context';
import { appDispatch, Selector } from './store/hooks/redux-hooks';
import { tokenSelector } from './store/selectors/tokenSelector';
import { getAccountAction } from './store/actions/accountActions';
import { authSelector } from './store/selectors/authSelector';

function App() {
    const dispatch = appDispatch();

    const token = Selector(tokenSelector);
    const isAuth = Selector(authSelector);

    const [isPricing, setIsPricing] = useState<boolean>(false);
    const [isSubscribe, setIsSubscribe] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [user, setUser] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });

    useEffect(() => {
        const getUser = async () => {
            await dispatch(getAccountAction(token as string));
        };
        if (isAuth) void getUser();
    }, [isAuth]);

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
