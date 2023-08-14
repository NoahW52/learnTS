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
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0) {
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
function prime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(prime(37));
//Q5 Factorials============================================
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));
//Q6 Count Digits===========================================
function countDig(num) {
    var count = 0;
    if (num === 0) {
        return 1;
    }
    while (num !== 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDig(12345));
//Q10 Temperature Conversion========================
function tempCon(temp, unit) {
    if (unit === 'C' || unit === 'c') {
        var newFar = (temp * 1.8) + 32;
        return newFar + " Fahrenheit";
    }
    if (unit === "F" || unit === 'f') {
        var newCel = (temp - 32) * .55556;
        return newCel + " Celsius";
    }
}
console.log(tempCon(20, 'c'));
