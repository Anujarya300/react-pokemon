import * as React from 'react';
import { Row } from 'react-bootstrap';
import { firstUC } from '../../../common/utils';


export interface MoveListProps {
    moves: any[];
}

const MoveListComponent: React.SFC<MoveListProps> = props => {

    return (
        <div>
            {props.moves.map(x =>
                <Row key={x.move.name}>
                    <span className="move-list">{firstUC(x.move.name)}</span>
                </Row>)
            }
        </div>
    )
}

export default MoveListComponent;