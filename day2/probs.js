//Q1=================================
console.log("hello typescript");
var values = { num1: 52, word: "Noah", fact: true, arr: [1, 3, 5, 6] };
function printV(values) {
    return values.num1 + " " + values.word + " " + values.fact + " " + values.arr;
}
console.log(printV(values));
//Q3======================================
function calc(num1, num2, op) {
    switch (op) {
        case "add":
            return num1 + num2;
    }
    switch (op) {
        case "sub":
            return num1 - num2;
    }
}
console.log(calc(3, 2, "add"));
//Q4======================================
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        var result = 1;
        for (var i = 2; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
}
console.log(factorial(5));
//Q5======================================
function rev(word) {
    var reversed = '';
    for (var i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word.charAt(i);
    }
    return reversed;
}
console.log(rev('hello'));
//Q6======================================
function check(number) {
    if (number % 2 === 0) {
        return "".concat(number, " is even");
    }
    else {
        return "".concat(number, " is odd");
    }
}
console.log(check(15));
//Q7====================================
function max(newArr) {
    var max = newArr[0];
    for (var i = 1; i < newArr.length; i++) {
        if (newArr[i] > max) {
            max = newArr[i];
        }
    }
    return max;
}
var numbers = [1, 3, 2, 52, 4353, 3];
var maxNum = max(numbers);
console.log("your max number is: ", maxNum);
