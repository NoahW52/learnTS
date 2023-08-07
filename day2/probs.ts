// //Q1=================================

// console.log("hello typescript")

// //Q2=================================

// type data = {
//     num1: number
//     word: string
//     fact: boolean
//     arr: number[]
// }

// let values = { num1: 52, word:"Noah", fact: true, arr: [1,3,5,6] }

// function printV(values: data) {
//     return values.num1 + " " + values.word + " " + values.fact + " " + values.arr
// }

// console.log(printV(values))

// //Q3======================================

// function calc(num1: number, num2: number, op: string) {
//     switch(op) {
//         case "add":
//             return num1 + num2
//     }
//     switch(op) {
//         case "sub":
//             return num1 - num2
//     }
// }

// console.log(calc(3, 2, "add"))

// //Q4======================================

// function factorial(n: number): number {
//     if (n === 0 || n === 1) {
//         return 1
//     } else {
//         let result = 1
//         for (let i = 2; i <= n; i++) {
//             result = result * i
//         }
//         return result
//     }
// }

// console.log(factorial(5))

// //Q5======================================

// function rev(word: string): string {
//     let reversed = ''
//     for (let i = word.length -1; i >= 0; i--) {
//         reversed = reversed + word.charAt(i)
//     }
//     return reversed
// }

// console.log(rev('hello'))

// //Q6======================================

// function check(number: number): string {
//     if (number % 2 === 0) {
//         return `${number} is even`
//     } else {
//         return `${number} is odd`
//     }
// }

// console.log(check(15))

// //Q7====================================

// function max(newArr: number[]): number {

//     let max = newArr[0]
//     for (let i = 1; i < newArr.length; i++) {
//         if (newArr[i] > max) {
//             max = newArr[i]
//         }
//     }
//     return max
// }

// const numbers = [1, 3, 2, 52, 4353, 3]
// const maxNum = max(numbers)

// console.log("your max number is: ", maxNum)

// //Q1 8/7/2023====================================