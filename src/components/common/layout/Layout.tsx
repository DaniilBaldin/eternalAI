import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Layout.styles';
import { HeaderComponent } from '../header/Header';
import { FooterComponent } from '../footer/Footer';

export const Layout = () => {
    return (
        <Container>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </Container>
    );
};
