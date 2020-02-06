//Array#myEach(callback)

let callback = function(el) {
    return el
};

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        el = this[i]
        callback(el)
    };
};

//Array#myMap(callback)

let multiplied = function(el) {
    return (el) * 2
};

Array.prototype.myMap = function(callback) {
    let mapped_array = [];

    this.myEach(function(element) {
        mapped_array.push(callback(element))
    });
    // mapped_array.push(callback(this.myEach(block)));
    return mapped_array;
};

//Array#myReduce(callback[, initialValue])
let inject = function(acc, el) {
    return acc + el;
}

Array.prototype.myReduce = function(callback, initialValue) {

    array = this;
    let acc;
    if (initialValue) {
        acc = initialValue;
    } else {
        acc = array[0];
        array = array.slice(1);
    };

    array.myEach(function(el) {
        acc = callback(acc, el);
    });
    return acc;
};