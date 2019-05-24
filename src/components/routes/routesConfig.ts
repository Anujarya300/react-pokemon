import HelloContainer from '../hello/containers/helloContainer';
import { RouteConfigInterface } from './model';

export const routes: Array<RouteConfigInterface> = [
    {
        path: '/',
        component: HelloContainer,
        childRoutes: []
    }
];
