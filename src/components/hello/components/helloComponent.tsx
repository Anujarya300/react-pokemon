import * as React from "react";
import { withRouter } from "react-router";
import TestComponent from "../../test/components/testComponent";
import { helloAction } from "../actions";
import { connect } from "react-redux";
import { HelloModel } from "../models";

export interface HelloProps {
    helloAction?: (msg: string) => {};
    hello?: HelloModel;
    history?: any;
}

interface State {
    count: number;
}

class HelloComponent extends React.Component<HelloProps, State> {

    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            count: 0
        }
        this.displayCount = this.displayCount.bind(this);
        this.displayMsg = this.displayMsg.bind(this);
    }

    displayCount() {
        let newCount = this.state.count + 1;
        this.setState({
            count: newCount
        })
    }

    displayMsg() {
        this.props.helloAction("this is redux action test.");
    }

    render() {
        const { hello = {} as HelloModel, history } = this.props;
        return (<div>
            <h1>Pokemon</h1>
            <TestComponent count={this.state.count} />
            <button onClick={this.displayCount}>Test state</button>
            <button onClick={this.displayMsg}>Test redux action</button>
            <button onClick={()=> history.push("/pokemon")}>GO to Pokemon</button>
            <span>{hello.message}</span>
        </div>)
    }
}

export default withRouter(HelloComponent);