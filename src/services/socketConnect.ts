import { io } from 'socket.io-client';
import { storage } from './localStorage';

const URL = import.meta.env.VITE_SOCKET_URL;

const token = storage.get('Token');

export const IoSocket = io(URL, {
    auth: {
        token: `Bearer ${token}`,
    },
    // reconnection: true,
    autoConnect: false,
});
