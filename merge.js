var arr = [1, 4, 7, 3, 2];
function merge(arr, left, right, mid) {
    var arr1 = [];
    var arr2 = [];
    for (var i_1 = left; i_1 <= mid; i_1++) {
        arr1.push(arr[i_1]);
    }
    for (var i_2 = mid + 1; i_2 <= right; i_2++) {
        arr2.push(arr[i_2]);
    }
    var current = left;
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr[current] = arr1[i];
        }
        else {
            arr[current] = arr2[j];
            j++;
        }
        current++;
    }
    while (i < arr1.length) {
        arr[current] = arr2[i];
        i++;
        current++;
    }
    while (j > arr2.length) {
        arr[current] = arr2[j];
        j++;
        current++;
    }
}
function mergeSort(arr, left, right) {
    if (left == right) {
        return;
    }
    var mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, right, mid);
}
var z = mergeSort(arr, 0, arr.length - 1);
console.log(arr);
