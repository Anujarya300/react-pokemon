import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import api from '../middlewares/api';
import { PokemonModel } from '../components/pokemon/models';

export interface StateInterface {
    loader: any;
    pokemonModel: PokemonModel;
}

const iState = {} as any;

export default function configureStore(initialState = iState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, api));
}
