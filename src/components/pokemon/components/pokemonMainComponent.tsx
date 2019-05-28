import * as React from 'react';
import { PokemonModel } from '../models';
import PokemonListComponent from '../components/pokemonListComponent';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loader from "../../common/loader";
import FilterText from '../../common/filterText';

export interface PokemonMainProps {
    getPokemonAction: (url?: string) => {};
    getPokemonTypesAction: () => {};
    pokemonModel: PokemonModel;
}

interface State {
    selectedFilter: string;
}

export default class PokemonMainComponent extends React.Component<PokemonMainProps, State> {

    constructor(props: PokemonMainProps, state: State) {
        super(props, state);

        this.state = {
            selectedFilter: null
        }
    }

    componentDidMount() {
        if (this.props.pokemonModel.pokemons) {
            return;
        }
        this.props.getPokemonAction();
        this.props.getPokemonTypesAction();
    }

    fetchNextOrPrevPage = (nextOrPrevUrl: string) => {
        return this.props.getPokemonAction(nextOrPrevUrl);
    }

    getFilteredPokemons = () => {
        if (!this.state.selectedFilter) {
            return this.props.pokemonModel.pokemons;
        }
        const pokemonsFilter = this.props.pokemonModel.pokemons
            .filter(x => x.types.find(x => x.type.name === this.state.selectedFilter));
        return pokemonsFilter;
    }

    fetchNextPage = () => {
        this.fetchNextOrPrevPage(this.props.pokemonModel.next);
    }

    fetchPrevPage = () => {
        this.fetchNextOrPrevPage(this.props.pokemonModel.previous);
    }

    onFilterChanged = (selected: string[]) => {
        this.setState({ selectedFilter: selected[0] });
    }

    renderPageBtns = () => {
        return (
            <Row>
                <Button className="btn-page" onClick={this.fetchPrevPage}>{"<< Previous"}</Button>
                <Button className="btn-page" onClick={this.fetchNextPage}>{"Next >>"}</Button>
            </Row>
        );
    }

    render() {
        const { pokemonModel = {} as PokemonModel } = this.props;
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
        return <div>
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
                            selectedItem={this.state.selectedFilter}
                        />
                    </Col>
                </Row>
            </Container>
            <PokemonListComponent
                pokemons={filteredPokemons}
            />
        </div>

    }
}
