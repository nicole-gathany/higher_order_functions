# higher_order_functions

Define the higher order functions, show how they can be used in a problem, what's going on under the hood, and its time-space-complexity.

- .map()
  - A function that does the same thing to each item in an array and returns that array. Does not alter the original array.
- .reduce()
  - A function that reduces an array to one value
- .filter()
  - Returns array that meet a certain criteria
- .forEach()
  - Does the same thing to each item in an array but (unlike the .map()) does not return an array (or a value for that matter)
- .sort()
  - sorts items into an array in a certain order. If there are no parameters or functions within the .sort() method, it assumed that it would be in alphabetical order. So [5, 4, 1, 9, 10].sort() === [1, 10, 4, 5, 9].
  * To make the array sorted into a particular order, you can write it as array.sort((a, b) => a - b) or array.sort((a, b) => b-a ) for ascending or descending order.
- .slice()
  - returns a portion of an array (I think; let's double check)
- .pop()
  - Takes off the last item in an array
- .shift()
  -
- .push()
  - pushes new item at the end of an array
- .unshift()
  -
- .includes()
  - returns a boolean (true or false) as to whether an array includes an item
- .indexOf()

* returns the index of where an item is in an array.
* example: [4, 5, 6, 9].indexOf(9) === 3.
* If the array does not include the parameter, then -1 is returned.

- .every()
  - returns a boolean (true or false) as to whether an array includes

| Method | Quick Definition | Time-space complexity | Required Parameters | Optional Params | Alters original array? | Returns? |
| ------ | ---------------- | --------------------- | ------------------- | --------------- | ---------------------- | -------- |
| .map() |
