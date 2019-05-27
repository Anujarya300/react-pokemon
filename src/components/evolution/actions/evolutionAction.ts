import { CALL_API } from '../../../middlewares/api';
import * as api from '../../../services/api';
import { AxiosResponse } from 'axios';

export const GET_EVOLUTION_REQUEST = 'GET_EVOLUTION_REQUEST';
export const GET_EVOLUTION_SUCCESS = 'GET_EVOLUTION_SUCCESS';
export const GET_EVOLUTION_FAILURE = 'GET_EVOLUTION_FAILURE';


export function getPokemonEvolutionAction(url: string): Function {
    return function (dispatch: any, getState: Function) {
        return getPokemonEvolution(url).then((result: any) => {
            return dispatch(result);
        });
    };
}

function pokemonApiProm(url: string) {
    return api.callAPI({
        url,
        method: 'GET',
    });
}

function getPokemonEvolution(id: string) {
    return pokemonApiProm(api.getDataApiBaseUrl() + "/pokemon-species/" + id).then((response: AxiosResponse) => {
        const evolutionUrl: string = response.data.evolution_chain.url;
        return pokemonApiProm(evolutionUrl).then((response: AxiosResponse) => {
            return {
                [CALL_API]: {
                    types: [GET_EVOLUTION_REQUEST, GET_EVOLUTION_SUCCESS, GET_EVOLUTION_FAILURE],
                    responseData: response
                },
            };
        });
    })
}