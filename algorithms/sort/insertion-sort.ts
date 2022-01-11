// INFO: Run 'npx ts-node insertion-sort.ts' on prompt to execute or
// run "Debug Current File" if using vscode :)

interface Array<T> {
    insertionSort(callback?: (a: any, b: any) => boolean): Array<T>;
}

Array.prototype.insertionSort = function (
    aGreaterThanB?: (a: any, b: any) => boolean
) {
    let currentElement: any, previousElementIndex: number;
    aGreaterThanB =
        aGreaterThanB ||
        function (a, b): boolean {
            return a > b;
        };

    for (
        let currentElementIndex = 1;
        currentElementIndex < this.length;
        currentElementIndex++
    ) {
        currentElement = this[currentElementIndex];
        previousElementIndex = currentElementIndex - 1;
        while (
            previousElementIndex >= 0 &&
            aGreaterThanB(this[previousElementIndex], currentElement)
        ) {
            this[previousElementIndex + 1] = this[previousElementIndex];
            previousElementIndex--;
        }
        this[previousElementIndex + 1] = currentElement;
    }
    return this;
};

const array = [
    { foo: "lorem", value: 8 },
    { foo: "ipsum", value: 3 },
    { foo: "dolor", value: 5 },
    { foo: "rolod", value: 1 },
    { foo: "merol", value: 3 }
];
array.insertionSort((a, b) => a.value > b.value);
console.log(array);
/*
Expected output:
[
    { foo: 'rolod', value: 1 },
    { foo: 'ipsum', value: 3 },
    { foo: 'merol', value: 3 },
    { foo: 'dolor', value: 5 },
    { foo: 'lorem', value: 7 }
]
*/
console.log([3, 2, 5, 7, 2, 1].insertionSort());
/*
Expected output: [ 1, 2, 2, 3, 5, 7 ]
*/

/*
    INFO: "INSERTION-SORT can take different amounts of time to sort
    two input sequences of the same size depending on how nearly sorted
    they already are" (Introduction to Algorithms - 3rd, pg. 24)

    INFO: Worst-case running time = a*(n^2) + b*(n) + c

    INFO: Basically, this method shift all the previous elements
    until placing the current element to be sorted. So the larger
    the array, the greater the chance of performing poorly. For
    exemple:

    INPUT -> [2, 2, 3, 4, 5, 1]

    PROCESS
    [2, 2, 3, 4, 5, 1] varInMemory = 1
    [2, 2, 3, 4, 5, 5] varInMemory = 1
    [2, 2, 3, 4, 4, 5] varInMemory = 1
    [2, 2, 3, 3, 4, 5] varInMemory = 1
    [2, 2, 2, 3, 4, 5] varInMemory = 1
    [2, 2, 2, 3, 4, 5] varInMemory = 1
    [1, 2, 2, 3, 4, 5] varInMemory = 1

    OUTPUT
    [1, 2, 2, 3, 4, 5]
*/
