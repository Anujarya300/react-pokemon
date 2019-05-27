import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Pokemon } from '../models/pokemon';
import HeaderText from '../../common/headerText';
import PokemonDetailComponent from './pokemonDetailComponent';
import PokemonStatComponent from './pokemonStatComponent';

export interface PokemonProps {
    pokemon?: Pokemon;
    onPokemonClicked: (pokemon: Pokemon) => void;
}

class PokemonComponent extends React.Component<PokemonProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
        };
        this.onPokemonClicked = this.onPokemonClicked.bind(this);
    }

    componentDidMount() {

    }

    onPokemonClicked() {
        this.props.onPokemonClicked(this.props.pokemon);
    }

    render() {
        const pokemon = this.props.pokemon;
        if (!pokemon) {
            return null;
        }
        return (
            <div style={{ margin: "3%" }}>
                <div onClick={this.onPokemonClicked}>
                    <HeaderText text={pokemon.name} />
                    <Row>
                        <Col style={{ width: "10rem" }}>
                            <img alt={pokemon.name} src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} width="150" height="150" />
                        </Col>
                        <Col style={{ width: "11rem" }}>
                            <PokemonDetailComponent pokemon={pokemon} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PokemonStatComponent pokemon={pokemon} />
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default PokemonComponent;
