function isShuffledWell(array) {
	for(let i = 1; i < array.length; i++){
        if((Math.abs(array[i] - array[i - 1]) == 1) && (Math.abs(array[i] - array[i + 1]) == 1)){
            return false;
        }
    }

    return true;
}

console.log(isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]));
console.log(isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]));
console.log(isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]));
console.log(isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]));