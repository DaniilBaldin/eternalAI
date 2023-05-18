import { Account } from '~/components/pages/account/Account';
import { MainPage } from '~/components/pages/main/MainPage';

export enum Routes {
    MAIN = '/',
    ACCOUNT = '/account',
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
];
