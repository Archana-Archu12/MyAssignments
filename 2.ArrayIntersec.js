function intersection(arr1, arr2) {
    let result = [];  // move inside function

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (result.indexOf(arr1[i]) === -1) {
                    result.push(arr1[i]);
                }
            }
        }
    }
    return result;
}

console.log(intersection([2,2,3,4],[1,2,4,5]));
