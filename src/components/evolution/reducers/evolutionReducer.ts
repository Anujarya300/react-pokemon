import {
    GET_EVOLUTION_FAILURE,
    GET_EVOLUTION_REQUEST,
    GET_EVOLUTION_SUCCESS,
} from '../actions';
import { Action } from '../../../common';

export function evolutionReducer(state: any = {}, action: Action): any {
    switch (action.type) {
        case GET_EVOLUTION_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                success: false,
                error: false,
                evolution: {},
            });
        case GET_EVOLUTION_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                success: true,
                error: false,
                evolution: action.response.data,
            });
        case GET_EVOLUTION_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                success: false,
                error: true,
                msg: action.error.data,
            });
    }
    return state;
}
