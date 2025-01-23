function numInStr(array) {
	// not RegEx.
    return array.filter((str) => str.split('').some(char => char >= '0' && char <= '9'));
}

console.log(numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]

console.log(numInStr(["abc", "abc10"])); // ➞ ["abc10"]

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]

console.log(numInStr(["this is a test", "test1"])); // ➞ ["test1"]