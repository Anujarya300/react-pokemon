import { connect } from 'react-redux';
import {
    getPokemonAction,
    getPokemonTypesAction
} from '../actions';
import PokemonMainComponent from '../components/pokemonMainComponent';
import { StateInterface } from '../../../store';

const mapStateToProps = (state: StateInterface) => ({
    pokemon: state.pokemonModel,
});

const mapDispatchToProps = {
    getPokemonAction,
    getPokemonTypesAction,
};

export default connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps,
)(PokemonMainComponent);
