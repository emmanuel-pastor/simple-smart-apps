export function abbreviateNumber(value) {
    const suffixes = ["", "K+", "M+", "B+", "Trillion+"];

    const roundedValue = value >= 1000 ? value - (value % 1000) : value

    const suffixNum = Math.ceil((""+roundedValue).length/3)-1;
    let shortValue = parseFloat((suffixNum !== 0 ? (roundedValue / Math.pow(1000,suffixNum)) : roundedValue).toPrecision(3));
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(0);
    }

    return {number: roundedValue, string: shortValue + suffixes[suffixNum]};
}

//Formats any string into snake case
export function toSnakeCase(str) {
        return str &&
        str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
}