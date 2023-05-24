import { Account } from '~/components/pages/account/Account';
import { Chat } from '~/components/pages/chat/Chat';
import { MainPage } from '~/components/pages/main/MainPage';

export enum Routes {
    MAIN = '/',
    ACCOUNT = '/account',
    CHAT = '/chat/:id',
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
];
