function countTrue(array){
    return array.length > 0 ? array.reduce((prev, current) => prev += current,) : 0;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log([]);