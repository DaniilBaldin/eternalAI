import { lazy } from 'react';

const MainPage = lazy(async () => {
    IoSocket.disconnect();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return import('~/components/pages/main/MainPage').then(({ MainPage }) => ({
        default: MainPage,
    }));
});

const Account = lazy(async () => {
    IoSocket.disconnect();
    return import('~/components/pages/account/Account').then(({ Account }) => ({
        default: Account,
    }));
});
// const Chat = lazy(() =>
//     import('~/components/pages/chat/Chat').then(({ Chat }) => ({ default: Chat })),
// );

const Chat = lazy(async () => {
    IoSocket.connect();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return import('~/components/pages/chat/Chat').then(({ Chat }) => ({
        default: Chat,
    }));
});
import { LoginSuccessful } from '~/components/pages/login-successful/LoginSuccessful';
import { IoSocket } from '~/services/socketConnect';

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
