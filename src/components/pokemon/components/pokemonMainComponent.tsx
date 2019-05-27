import * as React from 'react';
import { PokemonModel } from '../models';
import PokemonListComponent from '../components/pokemonListComponent';

export interface PokemonMainProps {
    getPokemonAction: (url?: string) => {};
    getPokemonDetailsAction: (url: string) => {};
    getPokemonTypesAction: () => {};
    pokemon: PokemonModel;
}

export default class PokemonMainComponent extends React.Component<PokemonMainProps, {}> {

    componentDidMount() {
        this.props.getPokemonAction();
        this.props.getPokemonTypesAction();
    }

    getPokemonDetail = (id: string) => {
        return this.props.getPokemonDetailsAction(id);
    }

    fetchNextOrPrevPage = (nextOrPrevUrl: string) => {
        return this.props.getPokemonAction(nextOrPrevUrl);
    }

    render() {
        return <PokemonListComponent
            pokemonModel={this.props.pokemon}
            fetchNextOrPrevPage={this.fetchNextOrPrevPage}
        />;
    }
}
