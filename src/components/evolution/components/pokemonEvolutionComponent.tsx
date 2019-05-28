/* eslint  @typescript-eslint/camelcase: 0 */
import * as React from 'react';
import { Pokemon, PokemonModel } from '../../pokemon/models';
import { Evolution, EvolutionChain } from '../models';
import SingleEvolveComponent from './singleEvolveComponent';
import { Container, Row, Col } from 'react-bootstrap';
import EvolutionArrowComponent from './evolutionArrowComponent';
import { renderNestedComponent } from '../../../common/utils';


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

    const renderEvolution = (data: any) => {
        const pokemon: any = { name: data.name };
        return (
            <div key={data.name} className="evo-container">
                <Row>
                    {data.name !== props.evolution.chain.species.name
                        && <EvolutionArrowComponent text={(data.level || "").toString()} />}
                    <Col>
                        <SingleEvolveComponent pokemonModel={props.pokemonModel} pokemon={pokemon} />
                    </Col>
                </Row>
            </div>
        )
    }

    renderNestedComponent<EvolutionChain>({
        parent: [props.evolution.chain],
        extractData: (x: EvolutionChain) => {
            const { min_level, item = {} } = x.evolution_details[0] || {} as any;
            return {
                level: min_level || (item || {}).name,
                name: x.species.name
            };
        },
        nestedFieldName: "evolves_to",
        outputElm: elements,
        renderFn: renderEvolution,
        depth: null
    })

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