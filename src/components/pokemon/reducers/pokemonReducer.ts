import {
    GET_POKEMON_FAILURE,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
} from '../actions';
import { Action } from '../../../common';

export function pokemonReducer(state = {}, action: Action): any {
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
    }
    return state;
}
