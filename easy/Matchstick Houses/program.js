function matchHouses(steps){
    if (steps == 0) return 0;
    
    if (steps == 1) return 6;

    return 6 * steps - steps + 1;
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));