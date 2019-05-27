import * as React from 'react';
import { Pokemon } from '../models/pokemon';
import KeyValue from '../../common/keyValue';
import { firstUC } from '../../../common/utils';

export interface PokemonDetailComponentProps {
    pokemon: Pokemon;
}

const PokemonDetailComponent: React.SFC<PokemonDetailComponentProps> = props => {

    const displayFields: any = {
        "National №": props.pokemon.id,
        "Type": firstUC(props.pokemon.types[0].type.name),
        "Species": firstUC(props.pokemon.species.name),
        "Height": props.pokemon.height,
        "Weight": props.pokemon.weight,
        "Abilities": props.pokemon.abilities.map(x => {
            if (x.ability.is_hidden) {
                return `${firstUC(x.ability.name)}(hidden)`;
            }
            return firstUC(x.ability.name);
        }),
    }

    return (
        <div>

            {Object.keys(displayFields).map(x =>
                <div key={x}>
                    <hr className="hz-line"></hr>
                    <KeyValue keyStr={x} value={displayFields[x]} />
                </div>
            )}
        </div>
    )
}

export default PokemonDetailComponent;