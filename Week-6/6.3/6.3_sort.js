var abc = function (arr) {

    let zero = 0,
        one = 0, two = 0;

    for (let num of arr) {
        if (num == 0) {
            zero++;
        }
        else if (num == 1) {
            one++;
        }
        else {
            two++;
        }
    }

    arr = [];

    for (let i = 0; i < zero; i++) {
        arr.push(0);
    }
    for (let i = 0; i < one; i++) {
        arr.push(1);
    }
    for (let i = 0; i < two; i++) {
        arr.push(2);
    }

    return arr;
};

console.log(abc([1, 2, 0, 1, 0]));
