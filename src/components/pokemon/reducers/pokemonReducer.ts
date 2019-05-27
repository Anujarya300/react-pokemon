import {
    GET_POKEMON_FAILURE,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_DETAILS_FAILURE,
    GET_POKEMON_DETAILS_REQUEST,
    GET_POKEMON_DETAILS_SUCCESS,
    GET_POKEMON_TYPES_FAILURE,
    GET_POKEMON_TYPES_REQUEST,
    GET_POKEMON_TYPES_SUCCESS,
    GET_EVOLUTION_FAILURE,
    GET_EVOLUTION_REQUEST,
    GET_EVOLUTION_SUCCESS,
} from '../actions';
import { Action } from '../../../common';

export function pokemonReducer(state: any = {}, action: Action): any {
    switch (action.type) {
        case GET_POKEMON_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                success: false,
                error: false,
                pokemons: null,
            });
        case GET_POKEMON_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                success: true,
                error: false,
                pokemons: action.response.data.results,
                count: action.response.data.count,
                next: action.response.data.next,
                previous: action.response.data.previous,
            });
        case GET_POKEMON_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                success: false,
                error: true,
                msg: action.error.data,
            });
        case GET_POKEMON_DETAILS_REQUEST:
            return Object.assign({}, state, {
            });
        case GET_POKEMON_DETAILS_SUCCESS:
            const pokemonsDetail = { [action.response.data.id]: action.response.data };
            return Object.assign({}, state, {
                pokemonsDetails: { ...state.pokemonsDetails, ...pokemonsDetail },
            });
        case GET_POKEMON_DETAILS_FAILURE:
            return Object.assign({}, state, {
                msg: action.error.data,
            });
        case GET_POKEMON_TYPES_REQUEST:
            return Object.assign({}, state, {
                types: []
            });
        case GET_POKEMON_TYPES_SUCCESS:
            return Object.assign({}, state, {
                types: action.response.data.results,
            });
        case GET_POKEMON_TYPES_FAILURE:
            return Object.assign({}, state, {
                msg: action.error.data,
            });
        case GET_EVOLUTION_REQUEST:
            return Object.assign({}, state, {
                evolution: {}
            });
        case GET_EVOLUTION_SUCCESS:
            return Object.assign({}, state, {
                evolution: action.response.data,
            });
        case GET_EVOLUTION_FAILURE:
            return Object.assign({}, state, {
                msg: action.error.data,
            });
    }
    return state;
}
