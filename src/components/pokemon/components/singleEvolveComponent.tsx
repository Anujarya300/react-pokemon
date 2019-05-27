import * as React from 'react';
import { Row } from 'react-bootstrap';
import { Pokemon } from '../models';

export interface SingleEvolveProps {
    pokemon: Pokemon;
}

const SingleEvolveComponent: React.SFC<SingleEvolveProps> = props => {

    return (
        <div>
            <Row>
                <img alt={props.pokemon.name} src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.pokemon.name}.png`} width="150" height="150" />
            </Row>
            <Row>
                <label style={{margin: "auto"}}>{props.pokemon.name}</label>
            </Row>
        </div>
    )
}

export default SingleEvolveComponent;