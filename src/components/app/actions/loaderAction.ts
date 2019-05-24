import { Action} from "../../../common";

export const LOADER_START = 'LOADER_START';
export const LOADER_STOP = 'LOADER_STOP';

export interface loaderActionsInterface {
    startLoaderAction?: Function;
    stopLoaderAction?: Function;
}

function startLoader(message: string) {
    return {
        type: LOADER_START,
        response: message
    } as Action;
}

function stopLoader() {
    return {
        type: LOADER_STOP,
        response: null as any
    } as Action;
}

export function startLoaderAction(message: string): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(startLoader(message));
    }
}

export function stopLoaderAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(stopLoader());
    }
}
