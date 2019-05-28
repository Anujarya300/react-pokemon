import { NestedComponentParam } from "./interfaces";

export function firstUC(text: string) {
    if (!text) {
        return "";
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getUrlParamValue(props: any, fieldName: string) {
    const { match = {} } = props;
    const { params = {} } = match;
    return params[fieldName];
}

export function getUrlFieldValue(url: string, fieldName: string): string {
    if (!url) {
        return "";
    }
    const splitArr = url.split(fieldName + "=");
    if (splitArr.length > 1) {
        return splitArr[1];
    }
    return "";
}

export function renderNestedComponent<T>(param: NestedComponentParam<T>): any {
    if (!param.parent || !param.parent.length) {
        return null;
    }
    if (!param.depth) {
        param.depth = -1;
    }
    param.depth++;
    param.parent.forEach(x => {
        const data: any = param.extractData(x);
        data.depth = param.depth;
        param.outputElm.push(param.renderFn(data));
        param.parent = (x as any)[param.nestedFieldName];
        return renderNestedComponent(param);
    });
}