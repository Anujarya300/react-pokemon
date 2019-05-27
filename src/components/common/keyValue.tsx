import * as React from 'react';
import { Row } from 'react-bootstrap';
import './styles.scss';

export interface KeyValueProps {
    keyStr: string;
    value: string | string[];
}

const KeyValue: React.SFC<KeyValueProps> = props => {

    return (
        <div>
            <label className="label-key" >{props.keyStr + ":"}</label>
            <div className="label-value">
                {
                    Array.isArray(props.value) ? props.value.map(x =>
                        <Row key={x}><span>{x}</span></Row>
                    ) : <span>{props.value}</span>
                }
            </div>
        </div >
    )
}

export default KeyValue;