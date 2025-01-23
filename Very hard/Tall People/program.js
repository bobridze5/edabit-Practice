function block(array) {
    let count = 0;
    let result = 0;

    const x = array[0].length;
    const y = array.length;

    for (let j = 0; j < x; j++){
        count = 0;
        for(let i = y - 1; i >= 0; i--){
            if (array[i][j] == 1) {count++;} 
            else if (array[i][j] == 2){
                result += count;
                continue;
            }

            //console.log(array[i][j], i, j);
        }
    }
    //console.log(result);
    return result;
}

block([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]) // ➞ 2
  
  // The tall person blocks 2 people behind him thus
  // the function returns 2.
  
  
  block([
    [1, 2, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]) // ➞ 5
  
  // There are 2 tall people that block everyone behind
  // them. The first tall person in the first row blocks 3
  // people behind him while the second tall person in
  // the second row blocks 2 people behind him thus the
  // function returns 5.
  
  
  block([
    [1, 1, 1, 1],
    [2, 1, 1, 2],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]) // ➞ 4