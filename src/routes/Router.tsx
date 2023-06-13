import React, { FunctionComponent, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '~/components/common/layout/Layout';
import { routes } from './routes';
import { Loader } from '~/components/common/loader/Loader';

type RouterType = {
    path: string;
    element: FunctionComponent;
};

export const Router = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map((route: RouterType, index) => (
                        <Route key={index} path={route.path} element={<route.element />} />
                    ))}
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
};
