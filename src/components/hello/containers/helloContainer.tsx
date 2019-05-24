import * as React from "react";
import HelloComponent from "../components/helloComponent";
import { helloAction } from "../actions";
import { connect } from "react-redux";
import { HelloModel } from "../models";

export interface HelloProps {
    helloAction?: (msg: string) => {};
    hello?: HelloModel;
}

class HelloContainer extends React.Component<HelloProps, {}> {

    constructor(props: any, state: any) {
        super(props, state);
    }

    render() {
        return (
            <HelloComponent helloAction={this.props.helloAction} hello={this.props.hello} />
        )
    }
}

const mapStateToProps = (state: any) => ({
    ...state
})

const mapDispatchToProps = {
    helloAction
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(HelloContainer);