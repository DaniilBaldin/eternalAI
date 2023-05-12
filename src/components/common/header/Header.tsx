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
} from './Header.styles';
import { MenuModal } from '../modal/Menu/Menu';
import { LoginModal } from '../modal/Login/Login';
import { SignUpModal } from '../modal/Signup/Signup';

export const HeaderComponent = () => {
    const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
    const [isLoginShow, setIsLoginShow] = useState<boolean>(false);
    const [isSignupShow, setIsSignUpShow] = useState<boolean>(false);

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
    };

    return (
        <>
            {isLoginShow || isSignupShow ? (
                <Header $fixed={isMenuShow || isLoginShow || isSignupShow}>
                    <HeaderAlternative>
                        <LogoContainerAlternative
                            to="/"
                            onClick={() => {
                                setIsMenuShow(false);
                                setIsLoginShow(false);
                                setIsSignUpShow(false);
                            }}
                        >
                            <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                            <img src="/header/ETERNAL.svg" alt="Eternal" />
                        </LogoContainerAlternative>
                        <CloseButtonAlterntive onClick={onCloseHandler}>
                            <img src="/header/Close.svg" alt="MenuClose" style={{ margin: '0' }} />
                        </CloseButtonAlterntive>
                    </HeaderAlternative>
                    <LoginModal onClose={() => setIsLoginShow(false)} show={isLoginShow} />
                    <SignUpModal onClose={() => setIsSignUpShow(false)} show={isSignupShow} />
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
                        <ButtonsContainer>
                            <LoginButton type="button" onClick={onLoginHandler}>
                                LOGIN
                            </LoginButton>
                            <GetStartedButton type="button" onClick={onSignupHandler}>
                                GET STARTED
                            </GetStartedButton>
                        </ButtonsContainer>
                    </HeaderWrapper>

                    <MenuModal onClose={() => setIsMenuShow(false)} isShow={isMenuShow} />
                </Header>
            )}
        </>
    );
};
