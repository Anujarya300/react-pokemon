import * as React from 'react';

export interface HeaderTextProps {
    text: string;
    textColor?: string;
}

const HeaderText: React.SFC<HeaderTextProps> = props => {

    return (
        <div>
            <h2 style={{ color: props.textColor }}>
                {props.text}
            </h2>
        </div>
    )
}

export default HeaderText;