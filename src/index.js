module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }

    let numberToString = String(n);
    let i = numberToString.length - 1
    let result = '';

    while (i >= 0) {
        result = result + numberToString[i];
        i--;
    }
    return +result;
}
