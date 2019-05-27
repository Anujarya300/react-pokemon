import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import api from '../middlewares/api';
import { PokemonModel } from '../components/pokemon/models';
import { EvolutionModel } from '../components/evolution/models/evolutionModel';

export interface StateInterface {
    loader: any;
    pokemonModel: PokemonModel;
    evolutionModel: EvolutionModel;
}

const iState = {} as any;

export default function configureStore(initialState = iState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, api));
}
