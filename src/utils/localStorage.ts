/* eslint-disable @typescript-eslint/no-explicit-any */
export const storage = {
    set: (key: string, value: any) => {
        localStorage.setItem(key, value);
    },
    get: <T>(key: string, defaultValue?: T): T => {
        const value = localStorage.getItem(key);
        return (value ? value : defaultValue) as T;
    },
    remove: (key: string) => {
        localStorage.removeItem(key);
    },
};
