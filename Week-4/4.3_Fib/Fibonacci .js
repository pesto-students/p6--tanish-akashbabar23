// Solution: print fibonacci series using iterators
let fibo = (num) => {
    return {
        [Symbol.iterator]: () => {
            let i = 0, j = 1, k;
            let v = 0;
            return {
                next: () => {
                    if (v < num) {
                        v++;
                        k = i + j ;
                        i = j;
                        j = k;
                        return { value: i, done: false };
                    } else {
                        return { done: true };
                    }
                }
            }
        }
    }
}

for (const series of fibo(5)) {
    console.log(series)
}
