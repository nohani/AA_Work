//Array#uniq method
Array.prototype.uniq = function() {
    let uniq_array = [];
    for (let i = 0; i < this.length; i++) {
        if (!uniq_array.includes(this[i])) {
            uniq_array.push(this[i]);
        };
    }
    return uniq_array;
};

//Array#twoSum method
Array.prototype.twoSum = function() {
    let new_arr = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if ((this[i] + this[j] === 0) && (j > i)) {
                new_arr.push([i, j]);
            };
        };
    };
    return new_arr;
};

//Array#transpose method
Array.prototype.transpose = function() {
    let height = this.length;
    let width = this[0].length;

    let new_arr = Array.from(Array(height), () => new Array(width))

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            new_arr[i][j] = this[j][i];
        };
    };
    return new_arr;
};