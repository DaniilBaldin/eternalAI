import React, { useState } from 'react';

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
    const [image, setImage] = useState<string>('/header/ETERNAL.svg');
    return (
        <Header>
            <HeaderMain>
                <MenuButton>
                    <img src="/header/MenuButton.svg" alt="Eternal" />
                </MenuButton>
                <LogoContainer to="/">
                    <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                    <img
                        src={image}
                        alt="Eternal"
                        onMouseOver={() => {
                            setImage('/header/ETERNAL-pink.svg');
                        }}
                        onMouseOut={() => {
                            setImage('/header/ETERNAL.svg');
                        }}
                    />
                </LogoContainer>
                <ButtonsContainer>
                    <LoginButton type="button">LOGIN</LoginButton>
                    <GetStartedButton>GET STARTED</GetStartedButton>
                </ButtonsContainer>
            </HeaderMain>
        </Header>
    );
};
