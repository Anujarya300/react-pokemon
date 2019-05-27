import * as React from 'react';
import { Row } from 'react-bootstrap';
import { Pokemon, PokemonModel } from '../../pokemon/models';
import { firstUC } from "../../../common/utils";
import MoveListComponent from './moveListComponent';

export interface SingleEvolveProps {
    pokemonModel: PokemonModel;
    pokemon: Pokemon;
}

const SingleEvolveComponent: React.SFC<SingleEvolveProps> = props => {

    const pokemon = getPokemonByName(props, props.pokemon.name);
    return (
        <div>

            <Row>
                <img alt={pokemon.name} src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`} width="150" height="150" />
            </Row>
            <Row>
                <label className="evo-label">{pokemon.id && `#${pokemon.id.toString().padStart(3, '0')}`}</label>
            </Row>
            <Row>
                <label className="evo-label">{firstUC(pokemon.name)}</label>
            </Row>
            <Row>
                <label className="evo-type-label">{pokemon.types && firstUC(pokemon.types[0].type.name)}</label>
            </Row>
            <Row>
                <h5>Move List</h5>
            </Row>
            {pokemon.moves && <MoveListComponent moves={pokemon.moves} />}

        </div>
    )
}

export default SingleEvolveComponent;

function getPokemonByName(props: SingleEvolveProps, name: string ) {
    let pokemon = props.pokemonModel.pokemons.find(x => x.name === name);
    if (!pokemon) {
        pokemon = new Pokemon();
        pokemon.name = name;
        return pokemon;
    }
    return pokemon;
}