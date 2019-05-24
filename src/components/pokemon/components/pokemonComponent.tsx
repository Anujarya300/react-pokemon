import * as React from 'react';
import { PokemonModel } from '../models';

export interface PokemonProps {
    pokemon?: PokemonModel;
}

interface State {
    count: number;
}

class PokemonComponent extends React.Component<PokemonProps, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            count: 0,
        };
    }

    render() {
        const { pokemon = new PokemonModel() } = this.props;
        if (
            !this.props.pokemon
      || !this.props.pokemon.pokemons
      || !this.props.pokemon.pokemons.length
        ) {
            return <h1>No Pokemons</h1>;
        }
        return (
            <div>
                <h1>Pokemons</h1>
                <ul>
                    {pokemon.pokemons.map(p => (
                        <li>
                            <span>{`Name: ${p.name}  > Url: ${p.url}`}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PokemonComponent;
