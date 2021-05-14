# higher_order_functions

Define the higher order functions, show how they can be used in a problem, what's going on under the hood, and its time-space-complexity.

### .map()

- A function that does the same thing to each item in an array and returns that array. Does not alter the original array.

### .reduce()

- A function that reduces an array to one value

### .filter()

- Returns array (often smaller than the original) with values that meet a certain criteria

### .forEach()

- Does the same thing to each item in an array but (unlike the .map()) does not return an array (or a value for that matter)

### .sort()

- sorts items into an array in a certain order. If there are no parameters or functions within the .sort() method, it assumed that it would be in alphabetical order. So [5, 4, 1, 9, 10].sort() === [1, 10, 4, 5, 9].

* To make the array sorted into a particular order, you can write it as array.sort((a, b) => a - b) or array.sort((a, b) => b-a ) for ascending or descending order.

### .slice()

- returns a portion of an array selected from start to end. Does not alter the original array.

### .pop()

- Takes off the last item in an array

### .shift()

### .push()

- pushes new item at the end of an array

### .unshift()

### .includes()

- returns a boolean (true or false) as to whether an array includes an item

### .indexOf()

- returns the index of where an item is in an array.
- example: [4, 5, 6, 9].indexOf(9) === 3.
- If the array does not include the parameter, then -1 is returned.

### .every()

- returns a boolean (true or false) as to whether every item in an array meets a certain parameter

| Method      | My Definition                                                                                                              | Official MDN Definition                                                                                                               | Time-space complexity | Required Parameters                            | Optional Params                                                                                                                                                                                                                                              | Alters original array? | Returns?                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| .map()      | A function that does the same thing to each item in an array and returns that array. Does not alter the original array.    | The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. | O(n)                  | array.map(element => {...})                    | index, array, thisArg                                                                                                                                                                                                                                        | False                  | True (new array)                                                                                                        |
| .reduce()   | A function that reduces an array to one value                                                                              | The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.  | O(n)                  | array.reduce((accumulator, currentVal)=>{...}) | index, array, initial value (reduce((accumulator, currentValue, index, array) => { ... }, initialValue)) If initialValue is not provided, it starts at index 1, that's why .reduce() often looks like array.reduce((a, b)=> a+b, 0) it's starting at index 0 | False                  | single value that the array is reduced to                                                                               |
| .filter()   | Returns array (often smaller than the original) with values that meet a certain criteria                                   | The filter() method creates a new array with all elements that pass the test implemented by the provided function.                    | O(n)                  | array.filter(item => {...})                    | index, array, thisArg                                                                                                                                                                                                                                        | false                  | true (A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.) |
| .forEach    | Does the same thing to each item in an array but (unlike the .map()) does not return an array (or a value for that matter) | The forEach() method executes a provided function once for each array element.                                                        | O(n)                  | array.forEach(item => {...})                   | index, array, thisArg                                                                                                                                                                                                                                        |
| .sort()     |
| .slice()    |
| .pop()      |
| .shift()    |
| .push()     |
| .unshift()  |
| .includes() |
| .indexOf    |
| .every      |
