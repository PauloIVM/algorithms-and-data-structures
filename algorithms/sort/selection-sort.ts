// INFO: Run 'npx ts-node selection-sort.ts' on prompt to execute or
// run "Debug Current File" if using vscode :)

// TODO: Add infos about these algorithm

function selectionSort(array: number[], initialIndex = 0) {
    if (initialIndex >= array.length - 1) {
        return;
    }
    let minorElementIndex = initialIndex;
    for (let index = initialIndex; index < array.length; index++) {
        if (array[index] < array[minorElementIndex]) {
            minorElementIndex = index;
        }
    }
    const firstElement = array[initialIndex];
    array[initialIndex] = array[minorElementIndex];
    array[minorElementIndex] = firstElement;
    // INFO: Originally is used one more iterative loop, but i prefer recursion
    selectionSort(array, initialIndex + 1);
}

const array4 = [8, 7, 1, 2, 5, 4, 3, 6];
selectionSort(array4);
console.log(array4);
