import { lazy } from 'react';

const MainPage = lazy(() =>
    import('~/components/pages/main/MainPage').then(({ MainPageMemo }) => ({
        default: MainPageMemo,
    })),
);
const Account = lazy(() =>
    import('~/components/pages/account/Account').then(({ Account }) => ({ default: Account })),
);
const Chat = lazy(() =>
    import('~/components/pages/chat/Chat').then(({ Chat }) => ({ default: Chat })),
);
import { LoginSuccessful } from '~/components/pages/login-successful/LoginSuccessful';

export enum Routes {
    MAIN = '/',
    ACCOUNT = '/account',
    CHAT = '/chat/:id',
    LOGINSUCCESSFUL = '/login-successful',
}

export const routes = [
    {
        path: Routes.MAIN,
        element: MainPage,
    },
    {
        path: Routes.ACCOUNT,
        element: Account,
    },
    {
        path: Routes.CHAT,
        element: Chat,
    },
    {
        path: Routes.LOGINSUCCESSFUL,
        element: LoginSuccessful,
    },
];
