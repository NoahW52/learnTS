//Q1 make a calculator=====================================
// function calc(num1: number, num2: number, op: string) {
//     switch(op) {
//         case "MULTIPLY":
//             return num1 * num2
//     }
//     switch(op) {
//         case "DIVIDE":
//             if(num1 === 0 || num2 === 0)
//             return " Error: can't divide by 0"}  {
//         return num1 / num2
//     }
// }
// console.log(calc(3, 0, "MULTIPLY"))
//Q2 Make a function that returns only the even numbers of an array====================================
// even([52, 1, 2, 4, 5, 743, 22, 4])
// function even(numbers: number[]): void {
//     for (const num of numbers) {
//         if (num % 2 === 0) {
//             console.log(num)
//         }
//     }
// }
//Q3 make a function that returns only the odd numbers
// arr([43, 32, 52, 1, 4232, 53 ])
// function arr(numbers: number[]): void {
//     for (const num of numbers) {
//         if (num % 2 === 1)
//         console.log(num)
//     }
// }
//Q4 return the numbers in an array that are divisible by 3
arr([3, 9, 39, 2, 4, 222]);
function arr(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num % 3 === 0) {
            console.log(num);
        }
    }
}
