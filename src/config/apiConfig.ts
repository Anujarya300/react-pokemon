export interface ApiConfigInterface {
    protocol: string;
    host: string;
    dataApiUrl: string;
    apiUrl: string;
}

export const apiConfig: ApiConfigInterface = {
    protocol: 'http',
    host: 'localhost:9999',
    dataApiUrl: 'data',
    apiUrl: '',
};
