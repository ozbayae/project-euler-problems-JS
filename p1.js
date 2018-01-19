/*  
 * Multiples of 3 and 5
 * Problem 1 
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000. 
 * 
 */

// Todo 1: Needs improvement in parameter choices. ...args vs array. 4 arguments passed
// to arrayOfMultiples is hard to read in example below

// Todo 2: Package up useful stuff

// Todo 3: Error-handling hehe..

// Todo 4: Testing

console.log(arrayOfMultiples(10, 0, 3, 5).reduce((prev, next) => prev + next)) // >> 23
console.log(arrayOfMultiples(1000, 0, 3, 5).reduce((prev, next) => prev + next)) // >> *ANSWER*

function arrayOfMultiples (uppLim, lowLim, ...multiples) { //to do: create interface that takes an object to make lowLim optional
    // takes an upperlimit, a lower limit, and an arbitrary
    // amount of multiples
    return listOfNumbers(uppLim, lowLim) 
        //filter out anything that is a multiple of passed in "multiples"
        .filter((el) => isMultipleOfAny(el, multiples))
}

function isMultipleOfAny(num, arr) {
        //for loop is used for early return
        for(let i = 0; i < arr.length; i++) {
            if(isMultipleOf(num, arr[i])) {
            // return early if element is muliple of any item in arr 
            return true
            }
        }
        // element is not a multiple of any item in arr
        return false
    }

function isMultipleOf(num1, num2) {
    //return true for num1's that are multiples for num2
    return num1 % num2 === 0
}

function listOfNumbers(uppLim, lowLim = 0, step = 1) {
    // return an array of numbers up to upper limit,
    // optionally taking a lower limit and a step size
    const arr = [];
    for(let i = lowLim; i < uppLim; i += step) { 
        arr.push(i)
    }
    return arr
}

