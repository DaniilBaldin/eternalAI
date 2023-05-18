import React, { FunctionComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '~/components/common/layout/Layout';
import { routes } from './routes';

type RouterType = {
    path: string;
    element: FunctionComponent;
};

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {routes.map((route: RouterType, index) => (
                    <Route key={index} path={route.path} element={<route.element />} />
                ))}
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
