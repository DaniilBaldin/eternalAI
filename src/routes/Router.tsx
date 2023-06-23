import React, { FunctionComponent, Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// import { Layout } from '~/components/common/layout/Layout';
const Layout = lazy(() =>
    import('~/components/common/layout/Layout').then(({ Layout }) => ({ default: Layout })),
);

import { Loader } from '~/components/common/loader/Loader';
import { routes } from './routes';

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
