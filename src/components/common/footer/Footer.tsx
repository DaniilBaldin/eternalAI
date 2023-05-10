import React from 'react';

import {
    Footer,
    LogoContainer,
    CentralText,
    ButtonsContainer,
    FollowUsText,
    SocialButton,
} from './Footer.styles';

export const FooterComponent = () => {
    return (
        <Footer>
            <LogoContainer to="/">
                <img src="/header/Logo.svg" alt="Logo" style={{ marginRight: '5px' }} />
                <img src="/header/ETERNAL.svg" alt="Eternal" />
            </LogoContainer>
            <CentralText> &copy; 2023 Eternal. All rights reserved.</CentralText>
            <ButtonsContainer>
                <FollowUsText>FOLLOW US</FollowUsText>
                <SocialButton to="https://twitter.com/talktoheroes" style={{ marginRight: '8px' }}>
                    <img src="/footer/Twitter.svg" alt="Twitter" />
                </SocialButton>
                <SocialButton
                    to="https://www.instagram.com/talktoheroes/"
                    style={{ marginRight: '8px' }}
                >
                    <img src="/footer/Instagram.svg" alt="Instagramm" />
                </SocialButton>
                <SocialButton to="https://www.youtube.com/@eternalai">
                    <img src="/footer/Youtube.svg" alt="Youtube" />
                </SocialButton>
            </ButtonsContainer>
        </Footer>
    );
};
