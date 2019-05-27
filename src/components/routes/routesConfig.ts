import PokemonContainer from '../pokemon/containers/pokemonContainer';
import { RouteConfigInterface } from './model';

export const routes: RouteConfigInterface[] = [
    {
        path: '/',
        component: PokemonContainer,
        childRoutes: [],
    },
    {
        path: '/evolution',
        component: PokemonContainer,
        childRoutes: [],
    },
];
