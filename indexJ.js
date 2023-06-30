//start a loop that loops through an array
//1st
//have an array with numbers in them
let array = [2, 4, 6, 8, 11, 20, 15, 22]
//save the odd numbers in an empty array
let odds = []
//use a for loop to loop over the given numbers 
for (let i = 0; i < array.length; i++) {
    //if the numbers at index I are % with 2 and result gives 1 = that will be an odd number
    if (array[i] % 2 === 1) {
        // save those numbers in the odd array
        odds.push(array[i])

    }
}
//cosnole.log out the result
console.log(odds);



//4th fizbuzz
//Create JavaScript code that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
// we will loop over the numbers to find the Fizz, Buzz, and FizzBuzz
for (let i = 1; i < 100; i++) {
    // if the number is % with 3 and 5 will result = fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
        // numbers % 3 will result fizbuzz
        (console.log(`fizzbuzz`))
        // numbers that are % with 3 and result 0 will give us the fizz word
    } else if (i % 3 === 0) {
        // numbers that are % with 5 and result 0 will give us the buzz word
        (console.log(`fizz`))
    } else if (i % 5 === 0) {
        (console.log(`buzz`))
    } else {
        (console.log(i))

    }
}


// Create JavaScript code that loops through a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels. 

// Every other letter is considered a consonant.
//we need 2 different variables
// let array = "hello"
// //we will set the variables to 0
// let vowels = 0

// let consonants = 0
// use a for loop to loop over the string
for (let i = 0; i < array.length; i++) {
    // this is where we will tell the code what to compare the letters to in the if statement
    if (array[i] === `a` || array[i] === 'o' || array[i] === `e` || array[i] === `i` || array[i] === 'u') {
        vowels++
        //else statement to save the consonants
    } else {
        consonants++
    }
}
// // this is where we will console log out the vowels
// console.log(vowels)
// // this is where we will console log out the consonants
// console.log(consonants)




// reverse arrays :
//With a for loop, create JavaScript code that creates a new array in reverse order.

let array = [1, -1, 2, -3, 5, -8, 13]
// // create an array that will hold the values
let result = []
// //use a for loop to iterate through the array in reverse
for (let i = array.length - 1; i >= 0; i--) {
    //     //push the number at index I to the array
    result.push(array[i])
}
//console the result out
console.log(result)
