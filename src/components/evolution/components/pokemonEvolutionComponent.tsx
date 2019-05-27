/* eslint  @typescript-eslint/camelcase: 0 */
import * as React from 'react';
import { Pokemon, PokemonModel } from '../../pokemon/models';
import { Evolution, EvolutionChain } from '../models';
import SingleEvolveComponent from './singleEvolveComponent';
import { Container, Row, Col } from 'react-bootstrap';
import EvolutionArrowComponent from './evolutionArrowComponent';


export interface PokemonEvolutionComponentProps {
    pokemon: Pokemon;
    evolution: Evolution;
    pokemonModel: PokemonModel;
}

const PokemonEvolutionComponent: React.SFC<PokemonEvolutionComponentProps> = props => {

    if (!props.evolution || !props.evolution.chain) {
        return null;
    }

    const elements: any[] = [];
    let depth = -1;

    function renderEvolutionChain(evolves_to: EvolutionChain[]): any {
        if (!evolves_to || !evolves_to.length) {
            return null;
        }
        depth++;

        evolves_to.forEach(x => {
            const { min_level, item = {} } = x.evolution_details[0] || {} as any;
            elements.push(renderEvolution(min_level || (item || {}).name,
                x.species.name, depth, ));
            return renderEvolutionChain(x.evolves_to);
        });
    }

    function renderEvolution(level: number, name: string, depth: number) {
        const pokemon: any = { name };
        return (
            <div key={name} className="evo-container">
                <Row>
                    {name !== props.evolution.chain.species.name
                        && <EvolutionArrowComponent text={(level || "").toString()} />}
                    <Col>
                        <SingleEvolveComponent pokemonModel={props.pokemonModel} pokemon={pokemon} />
                    </Col>
                </Row>
            </div>
        )
    }
    renderEvolutionChain([props.evolution.chain]);

    return (
        <div>
            <h2>Evolution Chain</h2>
            <Container>
                <Row>
                    {elements.map(x => (x))}
                </Row>
            </Container>
        </div>
    )
}



export default PokemonEvolutionComponent;