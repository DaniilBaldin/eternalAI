import React, { useState } from 'react';

import {
    Header,
    MenuButton,
    LogoContainer,
    ButtonsContainer,
    LoginButton,
    GetStartedButton,
    CloseButton,
    HeaderAlternative,
    CloseButtonAlterntive,
    LogoContainerAlternative,
    HeaderWrapper,
    ShareButton,
} from './Header.styles';
import { MenuModal } from '../modal/Menu/Menu';
import { LoginModal } from '../modal/Login/Login';
import { SignUpModal } from '../modal/Signup/Signup';
import { ConsentModal } from '../modal/Consent/Consent';
import { useGlobalContext } from '~/utils/Context';
import { PaywallModal } from '../modal/Paywall/Paywall';
import { SubscribePayment } from '../modal/Paywall/components/SubscribePayment/SubscribePayment';
import { SubscribeSuccess } from '../modal/Paywall/components/SubscribeSuccess/SubscribeSuccess';
import { useLocation } from 'react-router-dom';

export const HeaderComponent = () => {
    const { pathname } = useLocation();

    const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
    const [isLoginShow, setIsLoginShow] = useState<boolean>(false);
    const [isSignupShow, setIsSignUpShow] = useState<boolean>(false);
    const [isConsent, setIsConsent] = useState<boolean>(false);

    const { isPricing, setIsPricing, isSubscribe, setIsSubscribe, isSuccess, setIsSuccess } =
        useGlobalContext();

    const onMenuHandler = () => {
        setIsLoginShow(false);
        setIsMenuShow(true);
        setIsSignUpShow(false);
    };

    const onLoginHandler = () => {
        setIsMenuShow(false);
        setIsSignUpShow(false);
        setIsLoginShow(true);
    };

    const onSignupHandler = () => {
        setIsLoginShow(false);
        setIsMenuShow(false);
        setIsSignUpShow(true);
    };

    const onCloseHandler = () => {
        setIsLoginShow(false);
        setIsSignUpShow(false);
        setIsConsent(false);
        setIsPricing(false);
        setIsMenuShow(false);
        setIsSubscribe(false);
        setIsSuccess(false);
    };

    const onConsentHandler = () => {
        setIsLoginShow(false);
        setIsSignUpShow(false);
        setIsConsent(true);
    };

    return (
        <>
            {isLoginShow || isSignupShow || isConsent || isPricing || isSubscribe || isSuccess ? (
                <Header
                    $fixed={
                        isConsent ||
                        isMenuShow ||
                        isLoginShow ||
                        isSignupShow ||
                        isPricing ||
                        isSubscribe ||
                        isSuccess
                    }
                >
                    <HeaderAlternative>
                        <LogoContainerAlternative
                            to="/"
                            onClick={() => {
                                setIsMenuShow(false);
                                setIsLoginShow(false);
                                setIsSignUpShow(false);
                                setIsConsent(false);
                                setIsPricing(false);
                                setIsSubscribe(false);
                                setIsSuccess(false);
                            }}
                        >
                            <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                            <img src="/header/ETERNAL.svg" alt="Eternal" />
                        </LogoContainerAlternative>
                        <CloseButtonAlterntive onClick={onCloseHandler}>
                            <img src="/header/Close.svg" alt="MenuClose" style={{ margin: '0' }} />
                        </CloseButtonAlterntive>
                    </HeaderAlternative>
                    <ConsentModal show={isConsent} onClose={() => setIsConsent(false)} />
                    <LoginModal
                        onClose={() => setIsLoginShow(false)}
                        show={isLoginShow}
                        onSignUp={onSignupHandler}
                    />
                    <SignUpModal
                        onClose={() => setIsSignUpShow(false)}
                        show={isSignupShow}
                        onSignIn={onLoginHandler}
                        onConsent={onConsentHandler}
                    />
                    <PaywallModal
                        show={isPricing}
                        onClose={() => {
                            setIsPricing(false);
                        }}
                    />
                    <SubscribePayment show={isSubscribe} />
                    <SubscribeSuccess show={isSuccess} />
                </Header>
            ) : (
                <Header $fixed={isMenuShow}>
                    <HeaderWrapper>
                        {!isMenuShow ? (
                            <MenuButton onClick={onMenuHandler}>
                                <img src="/header/MenuButton.svg" alt="Eternal" />
                            </MenuButton>
                        ) : (
                            <CloseButton onClick={() => setIsMenuShow(false)}>
                                <img
                                    src="/header/Close.svg"
                                    alt="MenuClose"
                                    style={{ margin: '0' }}
                                />
                            </CloseButton>
                        )}
                        <LogoContainer
                            to="/"
                            onClick={() => {
                                setIsMenuShow(false);
                                setIsLoginShow(false);
                            }}
                        >
                            <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                            <img src="/header/ETERNAL.svg" alt="Eternal" />
                        </LogoContainer>
                        {pathname.includes('chat') ? (
                            <ButtonsContainer>
                                <ShareButton>SHARE</ShareButton>
                            </ButtonsContainer>
                        ) : (
                            <ButtonsContainer>
                                <LoginButton type="button" onClick={onLoginHandler}>
                                    LOGIN
                                </LoginButton>
                                <GetStartedButton type="button" onClick={onSignupHandler}>
                                    GET STARTED
                                </GetStartedButton>
                            </ButtonsContainer>
                        )}
                    </HeaderWrapper>

                    <MenuModal onClose={() => setIsMenuShow(false)} isShow={isMenuShow} />
                </Header>
            )}
        </>
    );
};
