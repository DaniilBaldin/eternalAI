import React from 'react';

import {
    Header,
    HeaderMain,
    MenuButton,
    LogoContainer,
    ButtonsContainer,
    LoginButton,
    GetStartedButton,
} from './Header.styles';

export const HeaderComponent = () => {
    return (
        <Header>
            <HeaderMain>
                <MenuButton>
                    <img src="/header/MenuButton.svg" alt="Eternal" />
                </MenuButton>
                <LogoContainer to="/">
                    <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                    <img src="/header/ETERNAL.svg" alt="Eternal" />
                </LogoContainer>
                <ButtonsContainer>
                    <LoginButton type="button">LOGIN</LoginButton>
                    <GetStartedButton>GET STARTED</GetStartedButton>
                </ButtonsContainer>
            </HeaderMain>
        </Header>
    );
};
