module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }

    for (var i = n.toString().length - 1, result = ''; i >= 0; i--) {
        result = result + n.toString()[i];
    }
    return +result;
}
