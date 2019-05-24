import { LOADER_START, LOADER_STOP } from '../actions/loaderAction';
import { StateInterface } from '../../../store';
import { Action } from '../../../common';


export function loaderReducer(state = <StateInterface>{}, action: Action): any {
    switch (action.type) {
        case LOADER_START:
            return Object.assign({}, state, {
                loading: true,
                message: action.response
            });
        case LOADER_STOP:
            return Object.assign({}, state, {
                loading: false,
                message: null
            });
    }
    return state;
}