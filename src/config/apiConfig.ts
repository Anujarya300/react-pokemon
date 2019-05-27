export interface ApiConfigInterface {
    protocol: string;
    host: string;
    dataApiUrl: string;
    apiUrl: string;
}

export const apiConfig: ApiConfigInterface = {
    protocol: 'https',
    host: 'pokeapi.co',
    dataApiUrl: 'api/v2',
    apiUrl: '',
};
