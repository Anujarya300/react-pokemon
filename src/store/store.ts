import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { HelloModel } from '../components/hello/models';
import api from '../middlewares/api';
import { PokemonModel } from '../components/pokemon/models';

export interface StateInterface {
    loader: any;
    hello: HelloModel;
    pokemonModel: PokemonModel;
}

const iState = {} as any;

export default function configureStore(initialState = iState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, api));
}
