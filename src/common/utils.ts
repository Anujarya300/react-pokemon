
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