import * as React from 'react';
import { connect } from 'react-redux';
import Routes from '../routes/components/Routes';
import { StateInterface } from '../../store';
import './style/app.scss';

interface Props {
    loader?: any;
}

class App extends React.Component<Props, any> {

    render() {
        return (
            <div className="layout">
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
