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
        stripeId: string;
        subscriptionExpiresAt: number;
        hasSubscription: boolean;
    };
    success: boolean;
};

type SubscribeResponse = {
    subscription: {
        id: string;
        status: string;
        current_period_start: number;
        current_period_end: number;
        collection_method: string;
        customer: string;
    };
    success: boolean;
};

type SuccessResponse = {
    message: string;
    success: string;
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
        return this.instance.patch<AccountResponse>('/update-user', data, {
            headers: {
                Authorization: `Bearer ${JWTToken}`,
            },
        });
    };

    public subscribeUser = (
        JWTToken: string,
        data: {
            cardNumber: string;
            expMonth: number;
            expYear: number;
            cvc: string;
        },
    ) => {
        return this.instance.post<SubscribeResponse>('/subscribe', data, {
            headers: {
                Authorization: `Bearer ${JWTToken}`,
            },
        });
    };

    public unsubscribeUser = (JWTToken: string) => {
        return this.instance.get<SuccessResponse>('/unsubscribe', {
            headers: {
                Authorization: `Bearer ${JWTToken}`,
            },
        });
    };

    public updateSubscription = (
        JWTToken: string,
        data: {
            cardNumber: string;
            expMonth: number;
            expYear: number;
            cvc: string;
        },
    ) => {
        return this.instance.post<SuccessResponse>('/change-payment-method', data, {
            headers: {
                Authorization: `Bearer ${JWTToken}`,
            },
        });
    };
}

export const mainApi = Api.getInstance();
