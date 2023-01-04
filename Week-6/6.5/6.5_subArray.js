function pair(arr) {

    let input = 78;
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        let diff = 0;
        for (let j = 1; j <= arr.length; j++) {
            if (first > arr[j]) {
                diff = first - arr[j];
                if (diff == input) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                diff = arr[j] - first;
                if (diff == input) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        }

    }

}

arr = [5, 10, 3, 1, 50, 80];
console.log(pair(arr));
