//Q1 Even or Odd=======================================

// function evenOdd(num: number) {
//     if (num % 2 === 0) {
//         console.log('your number is even')
//     } else {
//         console.log('your number is odd')
//     }
// }

// evenOdd(7)

//Q2 FizzBuzz==========================================

// function fizzBuzz(num: number): void {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         } else if (i % 3 === 0 && i % 5 !== 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(100)

//Q3 Leap Year==========================================

// function leapY(year: number): void {
//         if(year % 4 === 0 && year % 100 !== 0) {
//             console.log(`${year} is a leap year`)
//         } else if(year % 400 === 0) {
//             console.log(`${year} is a leap year`)
//         } else {
//             console.log(`${year} is not a leap year`)
//         }
//     }

// leapY(1996)


//Q4 Prime Number========================================

// function prime(num: number): boolean {
//     if(num <= 1) {
//         return false
//     }
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         if(num % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(prime(37))

//Q5 Factorials============================================

// function factorial(num: number): number {
//     let result = 1
//     for(let i = 1; i <= num; i++) {
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(5))

//Q6 Count Digits===========================================

// function countDig(num:number): number {
//     let count = 0

//     if( num === 0) {
//         return 1
//     }
//     while(num !== 0) {
//         count++
//         num = Math.floor(num / 10)
//     }
//     return count
// }

// console.log(countDig(12345))

//Q10 Temperature Conversion========================

// function tempCon(temp: number, unit: string){
//     if(unit === 'C'|| unit === 'c') {
//         let newFar = (temp * 1.8) + 32
//         return newFar + " Fahrenheit"
//     }
//     if(unit === "F" || unit === 'f') {
//         let newCel = (temp - 32) * .55556
//         return newCel + " Celsius"
//     }
// }

// console.log(tempCon(20, 'c'))

//REDO Q1==========================================

function evenOdd(num: number) {
    if(num % 2 === 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
}

evenOdd(52)

//REDO Q2==========================================

// function fizzBuzz(num: number) {
//     for(let i = 1; i <= num; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         }else if(i % 3 === 0 && i % 5 !== 0) {
//             console.log('Fizz')
//         }else if(i % 5 === 0 && i % 3 !== 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(100)

//REDO Q3 Leap Year=====================================

function leapY(year: number): boolean {
    if(year % 4 === 0 && year % 100 !== 0) {
        return true
    } else if(year % 400 === 0) {
        return true
    } else {
        return false
    }
}

console.log(leapY(2000))

//REDO Q4==============================================

function Prime(num: number): boolean {
    if(num <= 1) {
        return false
    } 
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false
        } 
    }
    return true
}

console.log(Prime(1))

//REDO Q5===============================================

function factorial(num: number): number {
    let result = 1
    for(let i = 1; i <= num; i++) {
        result = result * i
    } return result
}

console.log(factorial(5))

//REDO Q6=============================================

function countDig(num: number): number {
    let count = 0
    if(num <= 0) {
        return 1
    }
    while(num !== 0) {
        count++
        num = Math.floor(num / 10)
    }
    return count
}

console.log(countDig(12242))