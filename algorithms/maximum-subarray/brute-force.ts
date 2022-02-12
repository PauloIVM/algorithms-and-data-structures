// https://www.youtube.com/watch?v=UncRSviH-cY

function maxSubarrayCubic(array: number[]): number[] {
    let maxSum = array[0];
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            const currentArray = filterMaxMin(array, i, j);
            const currentSum = arraySum(currentArray);
            if (currentSum > maxSum) {
                maxSum = currentSum;
                minIndex = i;
                maxIndex = j;
            }
        }
    }
    return filterMaxMin(array, minIndex, maxIndex);
}

function maxSubarrayQuadratic(array: number[]): number[] {
    let maxSum = array[0];
    let currentSum = 0;
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum = currentSum + array[j];
            if (currentSum > maxSum) {
                minIndex = i;
                maxIndex = j;
                maxSum = currentSum;
            }
        }
    }
    return filterMaxMin(array, minIndex, maxIndex);
}

// Não sei se isso funciona pra tudo:
function maxSubarrayKadane(array: number[]): number[] {
    let currentMinSum = array[0];
    let currentMaxSum = array[0];
    let minIndex = 0;
    let maxIndex = array.length - 1;
    for (let i = 1; i < array.length; i++) {
        currentMinSum = currentMinSum + array[i];
        currentMaxSum = currentMaxSum + array[i];
        if (currentMaxSum > array[i]) {
            maxIndex = i;
            currentMaxSum = 0;
        }
        if (currentMinSum < array[i]) {
            minIndex = i;
            currentMinSum = array[i];
        }
    }
    return filterMaxMin(array, minIndex, maxIndex);
}

function filterMaxMin(array: number[], minIndex: number, maxIndex: number) {
    return array.filter((_, index) => {
        return index >= minIndex && index <= maxIndex;
    });
}

function arraySum(array: number[]): number {
    let value = 0;
    array.forEach((currValue) => {
        value = value + currValue;
    });
    return value;
}

console.log(maxSubarrayCubic([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarrayQuadratic([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarrayKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
