function countBoomerangs(array) {
    let result = 0;
    for(let i = 1; i < array.length - 1; i++){
        if ((array[i - 1] === array[i + 1]) && (array[i] !== array[i - 1])) result++;
    }
	return result
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // ➞ 2

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // ➞ 1

console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));// ➞ 0