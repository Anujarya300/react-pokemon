import { CALL_API } from '../../../middlewares/api';
import * as api from '../../../services/api';
import { AxiosResponse } from 'axios';

export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';
export const GET_POKEMON_DETAILS_REQUEST = 'GET_POKEMON_DETAILS_REQUEST';
export const GET_POKEMON_DETAILS_SUCCESS = 'GET_POKEMON_DETAILS_SUCCESS';
export const GET_POKEMON_DETAILS_FAILURE = 'GET_POKEMON_DETAILS_FAILURE';
export const GET_POKEMON_TYPES_REQUEST = 'GET_POKEMON_TYPES_REQUEST';
export const GET_POKEMON_TYPES_SUCCESS = 'GET_POKEMON_TYPES_SUCCESS';
export const GET_POKEMON_TYPES_FAILURE = 'GET_POKEMON_TYPES_FAILURE';
export const GET_POKEMON_CLEAR = 'GET_POKEMON_CLEAR';


function clearPokemon() {
    return {
        type: GET_POKEMON_CLEAR
    }
}

function getPokemonTypes(url: string) {
    return {
        [CALL_API]: {
            types: [GET_POKEMON_TYPES_REQUEST, GET_POKEMON_TYPES_SUCCESS, GET_POKEMON_TYPES_FAILURE],
            url,
            method: 'GET',
        },
    };
}

export function clearPokemonAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearPokemon());
    };
}

export function getPokemonAction(url?: string): Function {
    return function (dispatch: any, getState: Function) {
        return getPokemon(url ? url : api.getDataApiBaseUrl() + "/pokemon").then((result: any) => {
            return dispatch(result);
        });
    };
}

export function getPokemonTypesAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getPokemonTypes(api.getDataApiBaseUrl() + "/type"));
    };
}

function pokemonApiProm(url: string) {
    return api.callAPI({
        url,
        method: 'GET',
    });
}

function getPokemon(url: string) {
    return pokemonApiProm(url).then((response: AxiosResponse) => {
        const pokemonDetailProms = response.data.results.map((x: any) => pokemonApiProm(x.url));
        return Promise.all(pokemonDetailProms).then((results: any) => {
            return {
                [CALL_API]: {
                    types: [GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE],
                    responseData: {
                        data: {
                            count: response.data.count,
                            results: results.map((x: any) => x.data),
                            next: response.data.next,
                            previous: response.data.previous
                        }
                    }
                },
            };
        });
    })
}