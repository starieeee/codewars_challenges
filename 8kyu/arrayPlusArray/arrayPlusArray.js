function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce((a, b) => a + b, 0);
    const sum2 = arr2.reduce((a, b) => a + b, 0);
    return sum1 + sum2;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
