
import * as React from 'react';


export interface  RouteConfigInterface {
    label?: string
    requiresAuthentication?: boolean,
    path?: string,
    dataPath?:string,
    indexRoute?: RouteConfigInterface ,
    component: React.ComponentType<any>,
    childRoutes?: Array<RouteConfigInterface>,
    fullPage?:boolean,
    projectId?: string,
}