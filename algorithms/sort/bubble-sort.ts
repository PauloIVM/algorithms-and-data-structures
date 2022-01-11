// INFO: Run 'npx ts-node bubble-sort.ts' on prompt to execute or
// run "Debug Current File" if using vscode :)

// INFO: This code is really inefficient because seems like always
// run in the worst case of insertion-sort (TODO: confirm that on pg 41)

// TODO: What is the name of those approach?

// TODO: Add infos about these algorithm

function bubbleSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        for (let j = array.length; j >= i; j--) {
            if (array[j] < array[j - 1]) {
                const aux = array[j];
                array[j] = array[j - 1];
                array[j - 1] = aux;
            }
        }
    }
}

// TODO: I'm having problems with var names iqual in other files
const array3 = [7, 6, 5, 4, 3, 2, 1];
bubbleSort(array3);
console.log(array3);
