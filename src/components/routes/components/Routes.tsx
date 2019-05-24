import * as React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import { routes } from '../routesConfig';
import { RouteConfigInterface } from '../model';

const history = createBrowserHistory();

class Routes extends React.Component<any, any> {

    renderRoutes(routes: Array<RouteConfigInterface>) {
        let routeList: Array<any> = [];

        routes.forEach(({ component: Component, path, childRoutes, ...rest }) => {
            routeList.push(
                <Route
                    exact
                    key={path}
                    path={path}
                    render={props => { let combinedProps = { ...rest, ...props }; return <Component {...combinedProps} /> }}
                    {...rest}
                />
            );
            if (childRoutes && childRoutes.length > 0) {
                routeList = routeList.concat(this.renderRoutes(childRoutes));
            }
        });
        return routeList;
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this.renderRoutes(routes)}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
