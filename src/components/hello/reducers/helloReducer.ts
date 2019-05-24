import { GET_HELLO } from '../actions/helloAction';
import { Action } from '../../../common/interfaces';


export function HelloReducer(state = <any>{}, action: Action): any {
    switch (action.type) {
        case GET_HELLO:
            return Object.assign({}, state, {
                loading: true,
                message: action.payload
            });
    }
    return state;
}