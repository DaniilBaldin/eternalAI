import { storage } from './localStorage';

const parseJWT = (token: string) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (err) {
        return null;
    }
};

type Token = {
    id: string;
    email: string;
    method: string;
    subscriptionExpiresAt: null | number;
    iat: number;
    exp: number;
};

export const verifyToken = (token: string) => {
    if (token) {
        const decodedJWT: Token = parseJWT(token);

        if (decodedJWT.exp * 1000 < Date.now()) {
            storage.remove('Token');
            return '';
        } else {
            return token;
        }
    } else {
        return '';
    }
};
