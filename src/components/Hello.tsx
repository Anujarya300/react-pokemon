import * as React from "react";
import {TestComponent } from "./Test";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <span>Pokemon</span>
            <TestComponent count={10} />
        </div>
    }
}