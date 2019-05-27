import * as React from 'react';
import { connect } from 'react-redux';
import {
    getPokemonAction, getPokemonDetailsAction,
    getPokemonTypesAction, getPokemonEvolutionAction
} from '../actions';
import { PokemonModel } from '../models';
import PokemonListComponent from '../components/pokemonListComponent';
import { StateInterface } from '../../../store';

export interface HelloProps {
    getPokemonAction: (url: string) => {};
    getPokemonDetailsAction: (url: string) => {};
    getPokemonTypesAction: (url: string) => {};
    getPokemonEvolutionAction: (speciesUrl: string) => {};
    pokemon: PokemonModel;
}

class PokemonContainer extends React.Component<HelloProps, {}> {

    constructor(props: any, state: any) {
        super(props, state);
        this.getPokemonDetail = this.getPokemonDetail.bind(this);
        this.fetchNextOrPrevPage = this.fetchNextOrPrevPage.bind(this);
    }

    componentDidMount() {
        this.props.getPokemonAction('https://pokeapi.co/api/v2/pokemon/');
        this.props.getPokemonTypesAction('https://pokeapi.co/api/v2/type');
    }

    getPokemonDetail(id: string) {
        return this.props.getPokemonDetailsAction(id);
    }

    fetchNextOrPrevPage(nextOrPrevUrl: string) {
        return this.props.getPokemonAction(nextOrPrevUrl);
    }

    render() {
        return <PokemonListComponent
            pokemonModel={this.props.pokemon}
            getPokemonDetail={this.getPokemonDetail}
            fetchNextOrPrevPage={this.fetchNextOrPrevPage}
            getPokemonEvolutionAction={this.props.getPokemonEvolutionAction}
        />;
    }
}

const mapStateToProps = (state: StateInterface) => ({
    pokemon: state.pokemonModel,
});

const mapDispatchToProps = {
    getPokemonAction,
    getPokemonDetailsAction,
    getPokemonTypesAction,
    getPokemonEvolutionAction,
};

export default connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps,
)(PokemonContainer);
