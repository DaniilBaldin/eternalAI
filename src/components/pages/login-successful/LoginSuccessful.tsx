import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { appDispatch } from '~/store/hooks/redux-hooks';
import { logIn } from '~/store/reducers/authReducer';
import { SuccessPaymentWindow, SuccessBadge, Title } from './LoginSuccessful.styles';

export const LoginSuccessful = () => {
    const dispatch = appDispatch();
    const navigate = useNavigate();

    const [params] = useSearchParams();
    const token = params.get('token');

    useEffect(() => {
        if (!token?.length) navigate('/');
    }, [token]);

    if (token?.length) {
        dispatch(logIn(token));
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }

    return (
        <SuccessPaymentWindow>
            <SuccessBadge>
                <img style={{ transform: 'rotate(180deg)' }} src="/Check-Big.svg" alt="Check" />
            </SuccessBadge>
            <Title>You have successfully logged in!</Title>
            {/* <Subtitle>You now can use all chats.</Subtitle> */}
        </SuccessPaymentWindow>
    );
};
