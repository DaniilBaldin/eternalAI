import React, { useState } from 'react';

import {
    Header,
    HeaderMain,
    MenuButton,
    LogoContainer,
    ButtonsContainer,
    LoginButton,
    GetStartedButton,
    CloseButton,
} from './Header.styles';
import { MenuModal } from '../modal/Menu/Menu';

export const HeaderComponent = () => {
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
        <Header $fixed={isShow}>
            <HeaderMain>
                {!isShow ? (
                    <MenuButton onClick={() => setIsShow(true)}>
                        <img src="/header/MenuButton.svg" alt="Eternal" />
                    </MenuButton>
                ) : (
                    <CloseButton onClick={() => setIsShow(false)}>
                        <img src="/header/Close.svg" alt="MenuClose" style={{ margin: '0' }} />
                    </CloseButton>
                )}
                <LogoContainer to="/">
                    <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                    <img src="/header/ETERNAL.svg" alt="Eternal" />
                </LogoContainer>
                <ButtonsContainer>
                    <LoginButton type="button">LOGIN</LoginButton>
                    <GetStartedButton>GET STARTED</GetStartedButton>
                </ButtonsContainer>
            </HeaderMain>
            <MenuModal onClose={() => setIsShow(false)} isShow={isShow} />
        </Header>
    );
};
