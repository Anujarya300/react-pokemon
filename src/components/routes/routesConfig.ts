import PokemonContainer from '../pokemon/containers';
import EvolutionContainer from '../evolution/containers';
import { RouteConfigInterface } from './model';

export const routes: RouteConfigInterface[] = [
    {
        path: '/',
        component: PokemonContainer,
        childRoutes: [],
    },
    {
        path: '/evolution/:id',
        component: EvolutionContainer,
        childRoutes: [],
    },
];
