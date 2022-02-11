//complete the function below

// a function that takes in an array and returns the sum of all the elements 
// in the array. ex. arraySum([1,3]) would output 4
const arraySum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    return sum;
}
console.log(arraySum([1,2,3,2])); // should output 8