import * as React from 'react';
import { connect } from 'react-redux';

import Routes from '../routes/components/Routes';
import { StateInterface } from '../../store';

interface Props {
    loader?: any;
}

class App extends React.Component<Props, any> {

    componentWillMount() {}

    componentDidMount() {}

    componentWillUpdate() {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return (
            <div style={{marginTop: "10px"}}>
                <Routes />
            </div>
        );
    }
}

const mapStateToProps = (state: StateInterface) => ({
    loader: state.loader,
});

export default connect(
    mapStateToProps,
    {},
)(App);
