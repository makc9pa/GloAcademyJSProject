'use strict';

const arr = ['123', '4567', '29098', '90909090', '1400000', '4000000', '2434567890']
for (let i = 0; i < arr.length; i++) {
    if ((arr[i][0] === '2') || (arr[i][0] === '4')) {
        console.log(arr[i]);
    }
}

const isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i}: делители этого числа: 1 и ${i}`);
    }
}