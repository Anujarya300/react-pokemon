import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { routes } from '../routesConfig';
import { RouteConfigInterface } from '../model';

class Routes extends React.Component<any, any> {
    renderRoutes(routes: RouteConfigInterface[]) {
        let routeList: any[] = [];

        routes.forEach(({
            component: Component, path, childRoutes, ...rest
        }) => {
            routeList.push(
                <Route
                    exact
                    key={path}
                    path={path}
                    render={(props) => {
                        const combinedProps = { ...rest, ...props };
                        return <Component {...combinedProps} />;
                    }}
                    {...rest}
                />,
            );
            if (childRoutes && childRoutes.length > 0) {
                routeList = routeList.concat(this.renderRoutes(childRoutes));
            }
        });
        return routeList;
    }

    render() {
        return (
            <HashRouter>
                <Switch>{this.renderRoutes(routes)}</Switch>
            </HashRouter>
        );
    }
}

export default Routes;
