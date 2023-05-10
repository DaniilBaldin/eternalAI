import { MainPage } from '~/components/pages/main/MainPage';

export enum Routes {
    MAIN = '/',
}

export const routes = [
    {
        path: Routes.MAIN,
        element: MainPage,
    },
];
