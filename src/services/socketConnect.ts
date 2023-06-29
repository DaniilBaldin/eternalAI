import { Socket, io } from 'socket.io-client';
import { store } from '~/store';

const URL = import.meta.env.VITE_SOCKET_URL;

const getToken = () => {
    const state = store.getState();
    return state.authSlice.token;
};

export const IoSocket: Socket = io(URL, {
    auth: (cb) => {
        cb({ token: `Bearer ${getToken()}` });
    },
    // reconnection: true,
    autoConnect: false,
});
