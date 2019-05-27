import * as React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PokemonModel, Pokemon } from '../models';
import PokemonComponent from './pokemonComponent';
import PokemonEvolutionComponent from './pokemonEvolutionComponent';
import FilterText from '../../common/filterText';

export interface PokemonListProps {
    pokemonModel?: PokemonModel;
    getPokemonDetail: (id: string) => {};
    fetchNextOrPrevPage: (url: string) => {};
    getPokemonEvolutionAction: (speciesUrl: string) => {};
}

interface State {
    evolutionView: boolean;
    selectedFilter: string;
    selectedPokemon: Pokemon;
}

class PokemonListComponent extends React.Component<PokemonListProps, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            evolutionView: false,
            selectedFilter: "",
            selectedPokemon: null,
        };
        this.fetchNextPage = this.fetchNextPage.bind(this);
        this.fetchPrevPage = this.fetchPrevPage.bind(this);
        this.showEvolutionChain = this.showEvolutionChain.bind(this);
        this.hideEvolutionChain = this.hideEvolutionChain.bind(this);
        this.onFilterChanged = this.onFilterChanged.bind(this);
        this.getFilteredPokemons = this.getFilteredPokemons.bind(this);
    }

    showEvolutionChain(selectedPokemon: Pokemon) {
        this.setState({
            evolutionView: true,
            selectedPokemon
        });
        this.props.getPokemonEvolutionAction(selectedPokemon.species.url);
    }

    hideEvolutionChain(e: any) {
        this.setState({
            evolutionView: false,
        });
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
                <Button style={{ margin: 5 }} onClick={this.fetchPrevPage}>{"<< Previous"}</Button>
                <Button style={{ margin: 5 }} onClick={this.fetchNextPage}>{"Next >>"}</Button>
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
            return <h1>Loading...</h1>;
        }
        const types = pokemonModel.types.map(x => x.name);
        const filteredPokemons = this.getFilteredPokemons();
        return (
            <div>
                {!this.state.evolutionView &&
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Pokemon List</h1>
                                </Col>
                                <Col>
                                    {this.renderPageBtns()}
                                </Col>
                                <Col style={{ width: "100px" }}>
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
                                        pokemon={p}
                                        onPokemonClicked={this.showEvolutionChain} />
                                ))}
                            </Row>
                            {this.renderPageBtns()}

                        </Container>;
                    </div>
                }
                {
                    this.state.evolutionView &&
                    <div>
                        <Container>
                            <div>
                                <h3
                                    style={{ cursor: "pointer", color: "grey" }}
                                    onClick={this.hideEvolutionChain}>{"<- BACK"}</h3>
                                <PokemonEvolutionComponent
                                    pokemon={this.state.selectedPokemon}
                                    evolution={pokemonModel.evolution}
                                />
                            </div>
                        </Container>
                    </div >
                }
            </div >


        );
    }
}

export default PokemonListComponent;
