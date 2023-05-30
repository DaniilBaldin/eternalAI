import axios, { AxiosInstance, AxiosResponse } from 'axios';

export default class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string | undefined, contentType = 'application/json') {
        this.instance = axios.create({
            baseURL,
            headers: {
                'Content-Type': contentType,
                'ngrok-skip-browser-warning': '69420',
            },
        });

        this.initializeResponseInterceptor();
    }

    private initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(this.handleResponseSuccess);
    };

    private handleResponseSuccess = (response: AxiosResponse) => response;
}
