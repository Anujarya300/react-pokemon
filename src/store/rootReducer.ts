
import { combineReducers } from 'redux';
import { HelloReducer } from "../components/hello/reducers";
import { StateInterface } from './store';
import { LoaderReducer } from '../components/app/reducers/loaderReducer';

export default combineReducers<StateInterface>({
    loader: LoaderReducer,
    hello: HelloReducer,
});