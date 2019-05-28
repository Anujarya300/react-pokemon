import * as React from 'react';
import { PokemonModel } from '../models';
import PokemonListComponent from '../components/pokemonListComponent';
import Loader from "../../common/Loader";

export interface PokemonMainProps {
    getPokemonAction: (url?: string) => {};
    getPokemonTypesAction: () => {};
    pokemonModel: PokemonModel;
}

export default class PokemonMainComponent extends React.Component<PokemonMainProps, {}> {

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
        return <PokemonListComponent
            pokemonModel={this.props.pokemonModel}
            fetchNextOrPrevPage={this.fetchNextOrPrevPage}
        />;
    }
}
