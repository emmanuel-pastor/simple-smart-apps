export function abbreviateNumber(value) {
    const suffixes = ["", "K", "M", "B","Trillion"];
    const suffixNum = Math.ceil((""+value).length/3)-1;
    let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(3));
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue+suffixes[suffixNum]+'+';
}