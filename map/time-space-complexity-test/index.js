//[1, 2, 3, 4, 5].map(item => console.count( item*2)); // 5 times

//[1, 2, 3, 4, 5, 10].map(item => console.count( item*2)); // 6 times

let mapAttack = function(array){
    return array.map(item => item*2)
}

let array = [1, 2, 3, 4, 5];
let largeArray = [...array, ...array, ...array, ...array, ...array];

console.log(mapAttack(array));

