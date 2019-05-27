import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/evolution.scss'

export interface EvolutionArrowProps {
    text: string;
}

const EvolutionArrowComponent: React.SFC<EvolutionArrowProps> = props => {

    return (
        <div>
            <Col className="arrow-container">
                {props.text &&
                    <Row>
                        <span>{`(Level ${props.text})`}</span>
                    </Row>}
                <Row>
                    <span>{"------->"}</span>
                </Row>
            </Col>
        </div>
    )
}

export default EvolutionArrowComponent;