import HttpClient from './httpClient';

type SignUpResponse = {
    user: { id: string; email: string };
    success: boolean;
};

type SignInResponse = {
    token: string;
    success: boolean;
};

type AccountResponse = {
    user: {
        id: string;
        email: string;
        name: string;
        method: string;
        phoneNumber: string;
    };
    success: boolean;
};

export default class Api extends HttpClient {
    static instance: Api;

    private constructor() {
        super(import.meta.env.VITE_BASE_URL);
    }

    static getInstance = () => {
        if (!Api.instance) {
            Api.instance = new Api();
        }

        return Api.instance;
    };

    public signUp = (data: { email: string; password: string }) => {
        return this.instance.post<SignUpResponse>('/sign-up', data);
    };

    public signIn = (data: { email: string; password: string }) => {
        return this.instance.post<SignInResponse>('/sign-in', data);
    };

    public getUser = () => {
        return this.instance.get<AccountResponse>('/account');
    };
}

export const mainApi = Api.getInstance();
