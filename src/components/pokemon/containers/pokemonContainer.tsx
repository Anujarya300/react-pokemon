import * as React from 'react';
import { connect } from 'react-redux';
import { getPokemonAction } from '../actions';
import { PokemonModel } from '../models';
import PokemonComponent from '../components/pokemonComponent';
import { StateInterface } from '../../../store';

export interface HelloProps {
    getPokemonAction: () => {};
    pokemon: PokemonModel;
}

class HelloContainer extends React.Component<HelloProps, {}> {

    componentDidMount() {
        this.props.getPokemonAction();
    }

    render() {
        return <PokemonComponent pokemon={this.props.pokemon} />;
    }
}

const mapStateToProps = (state: StateInterface) => ({
    pokemon: state.pokemonModel,
});

const mapDispatchToProps = {
    getPokemonAction,
};

export default connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps,
)(HelloContainer);
