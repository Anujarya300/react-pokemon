import HelloContainer from '../hello/containers/helloContainer';
import PokemonContainer from '../pokemon/containers/pokemonContainer';
import { RouteConfigInterface } from './model';

export const routes: RouteConfigInterface[] = [
    {
        path: '/',
        component: HelloContainer,
        childRoutes: [],
    },
    {
        path: '/pokemon',
        component: PokemonContainer,
        childRoutes: [],
    },
];
