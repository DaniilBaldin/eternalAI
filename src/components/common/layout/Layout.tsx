import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Layout.styles';
// import { HeaderComponent } from '../header/Header';
const HeaderComponent = lazy(() =>
    import('../header/Header').then(({ HeaderComponent }) => ({
        default: HeaderComponent,
    })),
);

// import { FooterComponent } from '../footer/Footer';
const FooterComponent = lazy(() =>
    import('../footer/Footer').then(({ FooterComponent }) => ({
        default: FooterComponent,
    })),
);

export const Layout = () => {
    return (
        <Container>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </Container>
    );
};
