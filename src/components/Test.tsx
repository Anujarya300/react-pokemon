import * as React from "react";

export interface TestProps { count: number }

export class TestComponent extends React.Component<TestProps, {}> {

    render() {
        return <div>
            <h3>Current Count {this.props.count}</h3>
        </div>
    }
}