import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { HelloModel } from '../components/hello/models';
import api from '../middlewares/api';

export interface StateInterface {
    loader: any,
    hello: HelloModel,
}

const iState = <StateInterface>{
};

export default function configureStore(initialState = iState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, api)
    );
}