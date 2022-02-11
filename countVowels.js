//complete the function below
//a function that takes in a string and returns the number of vowels in the string
//ex. countVowels('hey there you') would output 5

const countVowels = (str) => {
    let hash = {
       "a": 1,
       "e": 1,
       "i": 1,
       "o": 1,
       "u": 1
    };
    let count = 0;

    for (let i = 0; i < str.length; i += 1) {
        if (hash.hasOwnProperty(str[i])) {
            count += 1;
        }
    }
    return count;
}
console.log(countVowels('flowers'));