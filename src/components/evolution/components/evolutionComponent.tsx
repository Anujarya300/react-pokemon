import * as React from 'react';
import { PokemonModel } from '../../pokemon/models';
import PokemonEvolutionComponent from './pokemonEvolutionComponent';
import Loader from '../../common/Loader';
import { getUrlParamValue } from '../../../common/utils';
import { EvolutionModel } from '../models/evolutionModel';

export interface EvolutionComponentProps {
    getPokemonEvolutionAction: (id: string) => {};
    pokemonModel: PokemonModel;
    evolutionModel: EvolutionModel;
    match?: any;
}

export default class EvolutionComponent extends React.Component<EvolutionComponentProps, {}> {

    componentDidMount() {
        this.props.getPokemonEvolutionAction(getUrlParamValue(this.props, "id"));
    }

    getSelectedPokemon = () => {
        return this.props.pokemonModel
            .pokemons
            .find(x => x.id.toString() === getUrlParamValue(this.props, "id"));
    }

    render() {
        const { evolutionModel } = this.props;
        if (!evolutionModel.evolution || !evolutionModel.evolution.id) {
            return <Loader />
        }
        return <PokemonEvolutionComponent
            pokemonModel={this.props.pokemonModel}
            pokemon={this.getSelectedPokemon()}
            evolution={evolutionModel.evolution}
        />;
    }
}


