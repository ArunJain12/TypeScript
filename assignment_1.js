/*
    Problem: Finding two largest number in the array.
*/
function findTwoLargest(arr) {
    var largest = 0, secondLargest = -1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[largest]) {
            if (arr[i] > arr[largest]) {
                secondLargest = largest;
                largest = i;
            }
            else {
                if (secondLargest === -1 || arr[i] > arr[secondLargest]) {
                    secondLargest = i;
                }
            }
        }
    }
    var res = secondLargest;
    if (secondLargest !== -1) {
        res = arr[secondLargest];
    }
    console.log("Largest Numbers Are: [".concat(arr[largest], ", ").concat(res, "]"));
}
findTwoLargest([30, 40, 20, 10]);
findTwoLargest([10, 10, 10]);
findTwoLargest([510, -90, 400, 390, 100]);
