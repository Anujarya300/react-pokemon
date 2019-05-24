
import axios from 'axios';
import { AxiosRequestConfig} from 'axios';

import { apiConfigInterface, apiConfig } from '../config/apiConfig';

export interface apiInterface {
    getDataApiBaseUrl(apiConfig: apiConfigInterface): string;
    getApplicationApiBaseUrl(apiConfig: apiConfigInterface): string;
    callAPI(requestConfig: Object): Promise<any>;
}

export function getBase(config: apiConfigInterface = apiConfig) {
    return config.protocol + '://' + config.host;
}

export function getDataApiBaseUrl(config: apiConfigInterface = apiConfig) {
    return getBase(config) + '/' + config.dataApiUrl;
}

export function callAPI(requestConfig: AxiosRequestConfig) {
    return axios(requestConfig);
}

export function setHeaders(requestConfig: AxiosRequestConfig) {
    requestConfig.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    return requestConfig;
}