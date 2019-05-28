import { connect } from 'react-redux';
import { getPokemonEvolutionAction, clearEvolutionAction } from '../actions/evolutionAction';
import {
    getPokemonAction,
    getPokemonTypesAction,
} from '../../pokemon/actions';
import { StateInterface } from '../../../store';

import EvolutionComponent from '../components/evolutionComponent';

const mapStateToProps = (state: StateInterface) => ({
    pokemonModel: state.pokemonModel,
    evolutionModel: state.evolutionModel,
});

const mapDispatchToProps = {
    getPokemonEvolutionAction,
    getPokemonAction,
    getPokemonTypesAction,
    clearEvolutionAction
};

export default connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps,
)(EvolutionComponent);