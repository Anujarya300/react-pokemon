import { connect } from 'react-redux';
import {
    getPokemonAction,
    getPokemonTypesAction,
    clearPokemonAction
} from '../actions';
import { StateInterface } from '../../../store';
import PokemonContainer from './pokemonContainer';

const mapStateToProps = (state: StateInterface) => ({
    pokemonModel: state.pokemonModel,
});

const mapDispatchToProps = {
    getPokemonAction,
    getPokemonTypesAction,
    clearPokemonAction,
};

export default connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps,
)(PokemonContainer);
