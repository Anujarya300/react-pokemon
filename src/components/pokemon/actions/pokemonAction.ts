import { CALL_API } from '../../../middlewares/api';

export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';

function getPokemon(url: string) {
    return {
        [CALL_API]: {
            types: [GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE],
            url,
            method: 'GET',
        },
    };
}

export function getPokemonAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getPokemon('https://pokeapi.co/api/v2/pokemon/'));
    };
}
