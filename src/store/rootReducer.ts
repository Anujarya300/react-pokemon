import { combineReducers } from 'redux';
import { StateInterface } from './store';
import { loaderReducer } from '../components/app/reducers/loaderReducer';
import { pokemonReducer } from '../components/pokemon/reducers';

export default combineReducers<StateInterface>({
    loader: loaderReducer,
    pokemonModel: pokemonReducer,
});
