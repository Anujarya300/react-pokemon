import { GET_HELLO } from '../actions/helloAction';
import { Action } from '../../../common/interfaces';

export function helloReducer(state = {}, action: Action): any {
    switch (action.type) {
        case GET_HELLO:
            return Object.assign({}, state, {
                loading: true,
                message: action.response,
            });
    }
    return state;
}
