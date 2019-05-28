export interface Action {
    type: string;
    response: any;
    params?: any;
    error?: any;
}

export interface NestedComponentParam<T> {
    parent: T[];
    extractData: (x: T) => {};
    renderFn: (data: any) => {};
    nestedFieldName: string;
    outputElm: any[];
    depth: number;
}