function findMaxCrossingSubarray(
    array: number[],
    low: number,
    mid: number,
    high: number,
): {
    crossLow: number;
    crossHigh: number;
    sum: number;
} {
    let crossLow = mid;
    let leftSum = array[mid];
    let sum = 0;
    for (let index = mid; index >= low; index--) {
        sum = sum + array[index];
        if (sum > leftSum) {
            leftSum = sum;
            crossLow = index;
        }
    }
    let crossHigh = mid;
    let rightSum = 0;
    sum = 0;
    // INFO: mid + 1 to avoid sum mid_value twice
    for (let index = mid + 1; index <= high; index++) {
        sum = sum + array[index];
        if (sum > rightSum) {
            rightSum = sum;
            crossHigh = index;
        }
    }
    return { crossLow, crossHigh, sum: leftSum + rightSum };
}

function findMaxSubarray(
    array: number[],
    low = 0,
    high = array.length - 1,
): { low: number; high: number; sum: number } {
    if (high === low) {
        return { low, high, sum: array[low] };
    }
    const mid = Math.floor((low + high) / 2);
    const {
        low: leftLow,
        high: leftHigh,
        sum: leftSum,
    } = findMaxSubarray(array, low, mid);
    const {
        low: rightLow,
        high: rightHigh,
        sum: rightSum,
    } = findMaxSubarray(array, mid + 1, high);
    const {
        crossLow,
        crossHigh,
        sum: crossSum,
    } = findMaxCrossingSubarray(array, low, mid, high);
    if ((leftSum >= rightSum) && (leftSum >= crossSum)) {
        return { low: leftLow, high: leftHigh, sum: leftSum };
    }
    if ((rightSum >= leftSum) && (rightSum >= crossSum)) {
        return { low: rightLow, high: rightHigh, sum: rightSum };
    }
    return { low: crossLow, high: crossHigh, sum: crossSum };
}

//              0    1    2   3   4   5   6   7    8    9
const input = [-3, -16, -23, 18, 20, -7, 12, -5, -22, -15];
console.log(findMaxCrossingSubarray(input, 0, 4, 9));
// Output: { crossLow: 3, crossHigh: 6, sum: 43 }
console.log(findMaxCrossingSubarray(input, 0, 2, 9));
// Output: { crossLow: 2, crossHigh: 6, sum: 20 }
console.log(findMaxSubarray(input));
// Output: { crossLow: 3, crossHigh: 6, sum: 43 }
