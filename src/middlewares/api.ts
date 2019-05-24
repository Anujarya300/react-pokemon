import { Middleware, Store } from 'redux';
import * as batch from 'redux-batched-actions';
import * as api from '../services/api';

export const CALL_API = 'Call API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
//
const apiMiddleware: Middleware = (store: Store<any>) => (next: any): any => (
    action: any,
): any => {
    let callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    callAPI = api.setHeaders(callAPI);

    const { types } = callAPI;

    function actionWith(data: any) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [requestType, successType, failureType] = types;
    next(actionWith({ type: requestType }));

    return api
        .callAPI(callAPI)
        .then((response) => {
            if (
                action.actionData
        && action.actionData.successMessage
        && action.actionData.successMessage.length > 0
            ) {
                next(
                    batch.batchActions([
                        actionWith({
                            response,
                            type: successType,
                            params: action.params,
                        }),
                    ]),
                );
            } else {
                next(
                    actionWith({
                        response,
                        type: successType,
                        params: action.params,
                    }),
                );
            }
        })
        .catch((error) => {
            if (
                (error && error.status === 404)
        || error.status === 403
        || error.status === 500
        || error.status === 400
        || error.status === 401
            ) {
                const message = error.data || (action.actionData && action.actionData.errorMessage);
                next(
                    batch.batchActions([
                        actionWith({
                            type: failureType,
                            error: message || 'Failed To Perform Action',
                            params: action.params,
                        }),
                    ]),
                );
            } else {
                next(
                    batch.batchActions([
                        actionWith({
                            type: failureType,
                            error: 'Failed To Perform Action',
                            params: action.params,
                        }),
                    ]),
                );
            }
        });
};

export default apiMiddleware;
