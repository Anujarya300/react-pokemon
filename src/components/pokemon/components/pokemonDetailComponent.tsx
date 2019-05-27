import * as React from 'react';
import { Pokemon } from '../models/pokemon';
import KeyValue from '../../common/keyValue';

export interface PokemonDetailComponentProps {
    pokemon: Pokemon;
}

const PokemonDetailComponent: React.SFC<PokemonDetailComponentProps> = props => {

    const displayFields: any = {
        "National №": props.pokemon.id,
        "Type": props.pokemon.types[0].type.name,
        "Species": props.pokemon.species.name,
        "Height": props.pokemon.height,
        "Weight": props.pokemon.weight,
        "Abilities": props.pokemon.abilities.map(x => {
            if (x.ability.is_hidden) {
                return `${x.ability.name}(hidden)`;
            }
            return x.ability.name;
        }),
    }

    return (
        <div>

            {Object.keys(displayFields).map(x =>
                <div key={x}>
                    <hr style={{
                        marginTop: "0.1rem",
                        marginBottom: 0
                    }}></hr>
                    <KeyValue keyStr={x} value={displayFields[x]} />
                </div>
            )}
        </div>
    )
}

export default PokemonDetailComponent;