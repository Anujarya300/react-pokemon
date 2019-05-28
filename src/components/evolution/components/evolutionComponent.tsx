import * as React from 'react';
import { PokemonModel } from '../../pokemon/models';
import PokemonEvolutionComponent from './pokemonEvolutionComponent';
import Loader from '../../common/Loader';
import { getUrlParamValue } from '../../../common/utils';
import { EvolutionModel } from '../models/evolutionModel';

export interface EvolutionComponentProps {
    getPokemonAction: (url?: string) => {};
    getPokemonTypesAction: () => {};
    getPokemonEvolutionAction: (id: string) => {};
    pokemonModel: PokemonModel;
    evolutionModel: EvolutionModel;
    match?: any;
}

export default class EvolutionComponent extends React.Component<EvolutionComponentProps, {}> {

    componentDidMount() {
        // TODO: fetching all pokemons is not correct here,
        //      we need to fetch only pokemons that are the part of evolution chain
        if (!this.props.pokemonModel.pokemons) {
            this.props.getPokemonAction();
            this.props.getPokemonTypesAction();
        }
        this.props.getPokemonEvolutionAction(getUrlParamValue(this.props, "id"));
    }

    getSelectedPokemon = () => {
        return this.props.pokemonModel
            .pokemons
            .find(x => x.id.toString() === getUrlParamValue(this.props, "id"));
    }

    render() {
        const { evolutionModel, pokemonModel = {} as PokemonModel } = this.props;
        if (!evolutionModel.evolution || !evolutionModel.evolution.id || !pokemonModel.pokemons) {
            return <Loader />
        }
        return <PokemonEvolutionComponent
            pokemonModel={this.props.pokemonModel}
            pokemon={this.getSelectedPokemon()}
            evolution={evolutionModel.evolution}
        />;
    }
}


