/* const towerOfHanoi = function(n, from, to, spare) {
    if (n == 1) {
        console.log(`move from ${from} to ${to}`)
    } else {
         towerOfHanoi(n-1, from, spare, to)
         towerOfHanoi(1, from, to, spare)
         towerOfHanoi(n-1, spare, to, from)
    }
}
console.log(towerOfHanoi(7, 'A', 'B', 'C'))
 */


//RECURSION SOLVED ITERATIVELY

//1) counting sheep
const countSheep = function(sheep) {
    let i = 0;
    while (i <= sheep) {
        console.log('Another sheep jumped over the fence')
        i++

        if (i === sheep) {
            return('All sheep jumped over the fence') 
        }
    }
}

console.log(countSheep(3))

//2) Power calculator

const powerCalculator = function(base, exponent) {
    return Math.pow(base, exponent)
}

console.log(powerCalculator(10, 2))

//3) Reverse string

const reverseString = function(string) {
    let newString = [];

    let stringSplit = string.split('')

    for(let i = 0; i < (string.split('').length); i++) {
        let toInsert = stringSplit.pop()
        newString.push(toInsert)
    }

    return newString.join('')
}

console.log(reverseString('The black cat was seen on a friday'))

// 4) Find triangle number

const findTriangleNumber = function(n) {
    if (n === 1) {
        return 1
    }
    
    let numArray = [];

    for (let i = 0; i <= n; i++) {
        numArray.push(i)
    }

    let total = 0;

    for(let i = 0; i < numArray.length; i++) {
        total += numArray[i]
    }

    return total  
    
}

console.log(findTriangleNumber(6))

// 5) String seperator

const stringSeperator = function(string, sep) {
    return string.split(sep)
}

console.log(stringSeperator('Hello, how are you', ' '))

// 6) Fibonacci

const fibonacci = function(n) {
    let arr = [0, 1];

    for(let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }

    return arr[n]
}

console.log(fibonacci(7))

// 7) Factorial 

const factorial = function(n) {

    let result = 1

    for (let i = 1; i <= n; i++) {
        result *= i
    }

    return result
}

console.log(factorial(5))


