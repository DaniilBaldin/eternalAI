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

type AccountSetResponse = {
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

    public getUser = (JWTToken: string) => {
        return this.instance.get<AccountResponse>('/account', {
            headers: {
                Authorization: `Bearer ${JWTToken}`,
            },
        });
    };

    public setUser = (
        JWTToken: string,
        data: { email: string; name: string; phoneNumber: string; password: string },
    ) => {
        return this.instance.patch<AccountSetResponse>('/update-user', data, {
            headers: {
                Authorization: `Bearer ${JWTToken}`,
            },
        });
    };
}

export const mainApi = Api.getInstance();
