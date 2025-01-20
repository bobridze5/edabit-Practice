function sevenBoom(arr) {
	return arr.reduce((prev, current) => prev += current.toString(), '').match(/7/) ? "Boom!" : "there is no 7 in the array";
}

console.log([7,8,6].reduce((prev, current) => prev += current.toString())); // 786

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));
console.log(sevenBoom([7, 8, 6]));