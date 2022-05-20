console.log(4600);
var userArr = [
    { id: 1, age: 12, name: "Affan", salary: 40000 },
    { id: 2, age: 12, name: "Prathmesh", salary: 41000 },
    { id: 3, age: 12, name: "Naved", salary: 42000 },
    { id: 4, age: 12, name: "Mohit", salary: 43000 },
    { id: 5, age: 12, name: "Huzaifa", salary: 44000 },
    { id: 6, age: 12, name: "Bushra", salary: 45000 },
    { id: 7, age: 12, name: "Arshad", salary: 4600 },
    { id: 8, age: 12, name: "Saiyam", salary: 47000 },
    { id: 9, age: 12, name: "Haroon", salary: 40000 },
    { id: 10, age: 12, name: "Shakir", salary: 40000 },
];
function sort(arr, by) {
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
            if (arr1[i][by] <= arr2[j][by]) {
                arr[current] = arr1[i];
                i++;
            }
            else {
                arr[current] = arr2[j];
                j++;
            }
            current++;
        }
        while (i < arr1.length) {
            arr[current] = arr1[i];
            i++;
            current++;
        }
        while (j < arr2.length) {
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
}
sort(userArr, "salary");
