import * as React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PokemonModel, Pokemon } from '../models';
import PokemonComponent from './pokemonComponent';
import FilterText from '../../common/filterText';
import Loader from '../../common/Loader';

export interface PokemonListProps {
    pokemonModel?: PokemonModel;
    fetchNextOrPrevPage: (url: string) => {};
}

interface State {
    selectedFilter: string;
    selectedPokemon: Pokemon;
}

class PokemonListComponent extends React.Component<PokemonListProps, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            selectedFilter: "",
            selectedPokemon: null,
        };
        this.fetchNextPage = this.fetchNextPage.bind(this);
        this.fetchPrevPage = this.fetchPrevPage.bind(this);
        this.onFilterChanged = this.onFilterChanged.bind(this);
        this.getFilteredPokemons = this.getFilteredPokemons.bind(this);
    }

    fetchNextPage() {
        this.props.fetchNextOrPrevPage(this.props.pokemonModel.next);
    }

    fetchPrevPage() {
        this.props.fetchNextOrPrevPage(this.props.pokemonModel.previous);
    }

    onFilterChanged(selected: string[]) {
        this.setState({ selectedFilter: selected[0] });
    }

    renderPageBtns() {
        return (
            <Row>
                <Button className="btn-page" onClick={this.fetchPrevPage}>{"<< Previous"}</Button>
                <Button className="btn-page" onClick={this.fetchNextPage}>{"Next >>"}</Button>
            </Row>
        );
    }

    getFilteredPokemons() {
        if (!this.state.selectedFilter) {
            return this.props.pokemonModel.pokemons;
        }
        const pokemonsFilter = this.props.pokemonModel.pokemons
            .filter(x => x.types.find(x => x.type.name === this.state.selectedFilter));
        return pokemonsFilter;
    }

    render() {
        const { pokemonModel = new PokemonModel() } = this.props;
        if (
            !pokemonModel
            || !pokemonModel.pokemons
            || !pokemonModel.pokemons.length
            || !pokemonModel.types.length
        ) {
            return <Loader />
        }
        const types = pokemonModel.types.map(x => x.name);
        const filteredPokemons = this.getFilteredPokemons();
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Pokemon List</h1>
                        </Col>
                        <Col>
                            {this.renderPageBtns()}
                        </Col>
                        <Col className="filter-type">
                            <FilterText
                                items={types}
                                onFilterChanged={this.onFilterChanged}
                                defaultSelected={types[0]}
                                placeholder="Filter by Type"
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {filteredPokemons.map(p => (
                            <PokemonComponent
                                key={p.name}
                                pokemon={p} />
                        ))}
                    </Row>
                    {this.renderPageBtns()}
                </Container>;
            </div>

        );
    }
}

export default PokemonListComponent;
