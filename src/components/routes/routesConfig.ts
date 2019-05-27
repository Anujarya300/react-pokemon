import PokemonContainer from '../pokemon/containers/pokemonContainer';
import EvolutionContainer from '../evolution/containers/evolutionContainer';
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
