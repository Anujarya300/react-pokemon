import * as React from 'react';
import { PokemonModel, Pokemon } from '../models';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loader from "../../common/loader";
import FilterText from '../../common/filterText';
import * as InfiniteScroll from 'react-infinite-scroller';
import PokemonComponent from '../components/pokemonComponent';


export interface PokemonContainerProps {
    getPokemonAction: (url?: string) => {};
    getPokemonTypesAction: () => {};
    clearPokemonAction: () => {};
    pokemonModel: PokemonModel;
}

interface State {
    selectedFilter: string;
    hasMoreItems: boolean;
    nextPageUrl: string;
}

export default class PokemonContainer extends React.Component<PokemonContainerProps, State> {

    constructor(props: PokemonContainerProps, state: State) {
        super(props, state);

        this.state = {
            selectedFilter: null,
            hasMoreItems: true,
            nextPageUrl: "",
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
            .filter(x => x.types[0].type.name === this.state.selectedFilter);
        return pokemonsFilter;
    }

    onFilterChanged = (selected: string[]) => {
        this.setState({ selectedFilter: selected[0] });
        this.props.clearPokemonAction();
    }

    loadMore = () => {
        if (this.props.pokemonModel.next === this.state.nextPageUrl) {
            return;
        }
        if (!this.props.pokemonModel.next) {
            this.setState({
                hasMoreItems: false
            });
        }
        this.setState({
            nextPageUrl: this.props.pokemonModel.next
        })
        this.fetchNextOrPrevPage(this.props.pokemonModel.next);
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
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMore}
                hasMore={this.state.hasMoreItems}
                loader={<Loader key={0} />}
            >
                <Container>
                    <Row>
                        {filteredPokemons.map((p: Pokemon) => (
                            <PokemonComponent
                                key={p.id}
                                pokemon={p} />
                        ))}
                    </Row>
                </Container>;
            </InfiniteScroll>
        </div>

    }
}
