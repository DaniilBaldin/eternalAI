import React from 'react';

import {
    Footer,
    LogoContainer,
    CentralText,
    ButtonsContainer,
    FollowUsText,
    SocialButton,
} from './Footer.styles';
import { useLocation } from 'react-router-dom';

export const FooterComponent = () => {
    const { pathname } = useLocation();
    return (
        <div hidden={pathname.includes('chat')}>
            <Footer>
                <LogoContainer to="/">
                    <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                    <img src="/header/ETERNAL.svg" alt="Eternal" />
                </LogoContainer>
                <CentralText> &copy; 2023 Eternal. All rights reserved.</CentralText>
                <ButtonsContainer>
                    <FollowUsText>FOLLOW US</FollowUsText>
                    <SocialButton
                        href="https://twitter.com/talktoheroes"
                        style={{ marginRight: '8px' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/footer/Twitter.svg" alt="Twitter" />
                    </SocialButton>
                    <SocialButton
                        href="https://www.instagram.com/talktoheroes/"
                        style={{ marginRight: '8px' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/footer/Instagram.svg" alt="Instagramm" />
                    </SocialButton>
                    <SocialButton
                        href="https://www.youtube.com/@eternalai"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/footer/Youtube.svg" alt="Youtube" />
                    </SocialButton>
                </ButtonsContainer>
            </Footer>
        </div>
    );
};
