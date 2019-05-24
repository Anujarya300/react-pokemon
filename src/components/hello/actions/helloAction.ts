import { Action } from '../../../common/interfaces';

export const GET_HELLO = 'GET_HELLO';

export function helloAction(message: any): Function {
    return function (dispatch: any, getState: Function) {
        const result: Action = {
            type: GET_HELLO,
            response: message,
        };
        return dispatch(result);
    };
}
