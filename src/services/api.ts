import { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { ApiConfigInterface, apiConfig } from '../config/apiConfig';

export interface ApiInterface {
    getDataApiBaseUrl(apiConfig: ApiConfigInterface): string;
    getApplicationApiBaseUrl(apiConfig: ApiConfigInterface): string;
    callAPI(requestConfig: Record<string, any>): Promise<any>;
}

export function getBase(config: ApiConfigInterface = apiConfig) {
    return `${config.protocol}://${config.host}`;
}

export function getDataApiBaseUrl(config: ApiConfigInterface = apiConfig) {
    return `${getBase(config)}/${config.dataApiUrl}`;
}

export function callAPI(requestConfig: AxiosRequestConfig) {
    return axios(requestConfig);
}

export function setHeaders(requestConfig: AxiosRequestConfig) {
    requestConfig.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    return requestConfig;
}
