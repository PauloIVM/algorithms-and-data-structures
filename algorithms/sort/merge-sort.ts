// INFO: Run 'npx ts-node merge-sort.ts' on prompt to execute or
// run "Debug Current File" if using vscode :)

interface Array<T> {
    mergeSort(callback?: (a: any, b: any) => boolean): Array<T>;
}

// TODO: Implement as Array.prototype

function mergesort(arr: any[], initialIndex: number = 0, finalIndex?: number) {
    if (!finalIndex) {
        finalIndex = arr.length - 1;
    }
    let middleIndex: number = Math.floor((finalIndex+initialIndex)/2);
    if (finalIndex - initialIndex > 1) {
        mergesort(arr, initialIndex, middleIndex);
        mergesort(arr, middleIndex + 1, finalIndex);
    }
    // TIP: Here, check with the debugger to see if all merges are using already sorted sub-arrays
    merge(arr, initialIndex, middleIndex, finalIndex);
}

function merge(arr: any[], initialIndex: number, middleIndex: number, finalIndex: number) {
    let arrLeft = arr.filter((_, index) => index <= middleIndex && index >= initialIndex);
    let arrRight = arr.filter((_, index) => index > middleIndex && index <= finalIndex);
    let arrLeftIndex = 0;
    let arrRightIndex = 0;
    for (let index = initialIndex; index <= finalIndex; index++) {
        if (arrLeftIndex >= arrLeft.length) {
            arr[index] = arrRight[arrRightIndex];
            arrRightIndex++;
            continue;
        }
        if (arrRightIndex >= arrRight.length) {
            arr[index] = arrLeft[arrLeftIndex];
            arrLeftIndex++;
            continue;
        }
        if (arrLeft[arrLeftIndex] > arrRight[arrRightIndex]) {
            arr[index] = arrRight[arrRightIndex];
            arrRightIndex++;
        } else {
            arr[index] = arrLeft[arrLeftIndex];
            arrLeftIndex++;
        }

        // TODO: Apparently this also runs, find out the case where it's a problem
        // if (
        //     arrLeftIndex >= arrLeft.length ||
        //     arrLeft[arrLeftIndex] > arrRight[arrRightIndex]
        // ) {
        //     arr[index] = arrRight[arrRightIndex];
        //     arrRightIndex++;
        // } else {
        //     arr[index] = arrLeft[arrLeftIndex];
        //     arrLeftIndex++;
        // }
    }
}

const array1 = [1, 4, 5, 7, 2, 3, 6, 8, 8];
mergesort(array1);
console.log(array1);

// TODO: Implement the algorithm exactly as in "Introduction to Algorithms"
