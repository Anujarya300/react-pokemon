import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter, } from 'react-router';
import { Pokemon } from '../models/pokemon';
import HeaderText from '../../common/headerText';
import PokemonDetailComponent from './pokemonDetailComponent';
import PokemonStatComponent from './pokemonStatComponent';
import { firstUC } from '../../../common/utils';
import '../styles/pokemon.scss';

export interface PokemonProps {
    pokemon?: Pokemon;
    history?: any;
}

class PokemonComponent extends React.Component<PokemonProps, {}> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
        };
        this.onPokemonClicked = this.onPokemonClicked.bind(this);
    }

    onPokemonClicked() {
        this.props.history.push(`/evolution/${this.props.pokemon.id}`);
    }

    render() {
        const pokemon = this.props.pokemon;
        if (!pokemon) {
            return null;
        }
        return (
            <div className="pokemon-container">
                <div onClick={this.onPokemonClicked}>
                    <HeaderText text={firstUC(pokemon.name)} />
                    <Row>
                        <Col className="pokemon-img">
                            <img alt={pokemon.name} src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} width="150" height="150" />
                        </Col>
                        <Col className="pokemon-detail">
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

export default withRouter(PokemonComponent);
