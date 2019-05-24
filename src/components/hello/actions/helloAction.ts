import { Action } from "../../../common/interfaces";

export const GET_HELLO = "GET_HELLO";

export function helloAction(message: any): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch({
            type: GET_HELLO,
            payload: message
        } as Action);
    }
}