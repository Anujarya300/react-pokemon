import { Pokemon } from './pokemon';
import { PokemonType } from './pokemonTypes';
import { Evolution } from '../../evolution/models/evolution';

export class PokemonModel {
    pokemons: Pokemon[];
    count: number;
    next: string;
    previous: string;
    types: PokemonType[];
    evolution: Evolution;
}
