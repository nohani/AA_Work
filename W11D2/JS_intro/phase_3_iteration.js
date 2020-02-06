Array.prototype.bubbleSort = function() {
    arr = this;
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) {
                first_ele = arr[i];
                second_ele = arr[i + 1];
                arr[i] = second_ele;
                arr[i + 1] = first_ele;
                sorted = false;
            };
        };
    };
    return arr
};

String.prototype.substrings = function() {
    let substrings = []

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            substrings.push(this.slice(i, j))
        }
    }
    return substrings;
}