function getLength(array) {
    let result = 0;

    for (let element of array){
        if (Array.isArray(element)) {
            result += getLength(element);
        } else {
            result += 1;
        }
    }

	return result;
}

console.log(getLength([1, [2, 3]])); // ➞ 3

console.log(getLength([1, [2, [3, 4]]])); // ➞ 4

console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // ➞ 6

console.log(getLength([1, [2], 1, [2], 1])); // 5