import * as React from 'react';
import { Pokemon } from '../models/pokemon';
import KeyValue from '../../common/keyValue';
import { ProgressBar } from 'react-bootstrap';

export interface PokemonStatComponentProps {
    pokemon: Pokemon;
}

const PokemonStatComponent: React.SFC<PokemonStatComponentProps> = props => {

    function getValueByKey(key: string) {
        return props.pokemon.stats.find(x => x.stat.name === key).base_stat;
    }

    const displayFields: any = {
        "HP": getValueByKey("hp"),
        "Attact": getValueByKey("attack"),
        "Defense": getValueByKey("defense"),
        "Sp. Atk": getValueByKey("special-attack"),
        "Sp. Def": getValueByKey("special-defense"),
        "Speed": getValueByKey("speed"),
    }

    return (
        <div>
            <h4>Base Stats</h4>
            {Object.keys(displayFields).map(x =>
                <div key={x}>
                    <KeyValue key={x} keyStr={x} value={displayFields[x]} />
                    <ProgressBar className="progress-bar" now={displayFields[x]} />
                </div>
            )}
        </div>
    )
}

export default PokemonStatComponent;