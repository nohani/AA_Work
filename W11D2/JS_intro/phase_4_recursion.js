const range = function(start, end) {

    if (start === end) {
        return start
    };

    return [start].concat(range(start + 1, end));
};

const sumRec = function(arr) {
    if (arr.length <= 1) {
        return arr[0]
    };

    return arr[0] + sumRec(arr.slice(1));
};

const exponent = function(base, exp) {
    if (exp === 0) {
        return 1
    };

    return base * exponent(base, exp - 1);

};

const exponent2 = function(base, exp) {

    if (exp === 0) {
        return 1
    };

    if (exp % 2 === 0) {
        return exponent2(base, exp / 2) ** 2;
    } else {
        return base * (exponent2(base, (exp - 1) / 2) ** 2);
    };
};

const fibonacci = function(n) {
    let array = [];
    if (n <= 0) {
        return array = [];
    }
    if (n === 1) {
        return array = [1];
    }
    if (n === 2) {
        return array = [1, 1];
    }

    fibz = fibonacci(n - 1);
    return array.concat([fibz[n - 1] + fibz[n - 2]]);
}