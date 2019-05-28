import * as React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { PokemonModel, Pokemon } from '../models';
import PokemonComponent from './pokemonComponent';
import NoDataFound from '../../common/noDataFound';

export interface PokemonListProps {
    pokemons?: Array<Pokemon>;
}

class PokemonListComponent extends React.Component<PokemonListProps, {}> {

    render() {
        const { pokemons = [] } = this.props;
        if (!pokemons.length) {
            return (
                <Container>
                    <NoDataFound text={"No data found"} />
                </Container>)
        }
        return (
            <div>
                <Container>
                    <Row>
                        {pokemons.map((p: Pokemon) => (
                            <PokemonComponent
                                key={p.name}
                                pokemon={p} />
                        ))}
                    </Row>
                </Container>;
            </div>

        );
    }
}

export default PokemonListComponent;
