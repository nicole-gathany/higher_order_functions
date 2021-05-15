// Given an array add all of the elements in the array and return the sum

let addition = function(array){
    return array.reduce((a, b) => a +b, 0);
}

console.log(addition([1, 2, 3, 4, 5]));