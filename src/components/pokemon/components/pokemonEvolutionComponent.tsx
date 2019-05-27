/* eslint  @typescript-eslint/camelcase: 0 */
import * as React from 'react';
import { Pokemon, EvolutionChain } from '../models';
import { Evolution } from '../models';
import SingleEvolveComponent from './singleEvolveComponent';
import { Container, Row, Col } from 'react-bootstrap';


export interface PokemonEvolutionComponentProps {
    pokemon: Pokemon;
    evolution: Evolution;
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
            <div key={name} style={{ width: "25%" }}>
                <Row>
                    { name !== props.evolution.chain.species.name && renderArrow(level)}
                    <Col>
                        <SingleEvolveComponent pokemon={pokemon} />
                    </Col>

                </Row>
            </div>
        )
    }

    function renderArrow(level: number) {
        return (
            <Col style={{
                margin: "auto",
                marginRight: "30px",
            }}>
                {level &&
                    <Row>
                        <span>{`(Level ${level})`}</span>
                    </Row>}
                <Row>
                    <span>{"------->"}</span>
                </Row>
            </Col>
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