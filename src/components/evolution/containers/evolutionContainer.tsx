import * as React from 'react';
import { PokemonModel } from '../../pokemon/models';
import PokemonEvolutionComponent from '../components/pokemonEvolutionComponent';
import Loader from '../../common/loader';
import { getUrlParamValue } from '../../../common/utils';
import { EvolutionModel } from '../models/evolutionModel';

export interface EvolutionContainerProps {
    getPokemonAction: (url?: string) => {};
    getPokemonTypesAction: () => {};
    getPokemonEvolutionAction: (id: string) => {};
    clearEvolutionAction: () => {};
    pokemonModel: PokemonModel;
    evolutionModel: EvolutionModel;
    match?: any;
}

export default class EvolutionContainer extends React.Component<EvolutionContainerProps, {}> {

    componentDidMount() {
        // TODO: fetching all pokemons is not correct here,
        //      we need to fetch only pokemons that are the part of evolution chain
        if (!this.props.pokemonModel.pokemons) {
            this.props.getPokemonAction();
            this.props.getPokemonTypesAction();
        }
        this.props.getPokemonEvolutionAction(getUrlParamValue(this.props, "id"));
    }

    componentWillUnmount() {
        this.props.clearEvolutionAction();
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


