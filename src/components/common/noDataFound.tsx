import * as React from 'react';

export interface NoDataFoundProps {
    text: string;
}

const NoDataFound: React.SFC<NoDataFoundProps> = props => {

    return (
        <div>
            <h3>{props.text}</h3>
        </div>
    )
}

export default NoDataFound;