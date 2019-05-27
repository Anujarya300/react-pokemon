import * as React from 'react';
import { Row } from 'react-bootstrap';

export interface KeyValueProps {
    keyStr: string;
    value: string | string[];
}

const KeyValue: React.SFC<KeyValueProps> = props => {

    return (
        <div>
            <label style={{ color: "#737373" }} className="mr-2">{props.keyStr + ":"}</label>
            <div style={{ float: "right" }}>
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