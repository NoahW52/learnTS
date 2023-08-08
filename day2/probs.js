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
// function mult(num1: number, num2: number, op: string) {
//     switch(op) {
//         case "multi":
//             return num1 * num2
//     }
// }
// console.log(mult(3, 4, "multi"))
// //Q2==================================================
// function find5(newArr: string[]): string[] {
//     return newArr.filter((wordArr) => wordArr.length > 5)
// }
// console.log(find5(["word", "jennys", "arcEcho", "noah"]))
// //Q3===================================================
// type Book = {
//     title: string
//     author: string
// }
// function getJsAuth(books: Book[]): string[] {
//     const jsBooks = books.filter(book => book.title.indexOf("javascript") >= 0)
//     const authors = jsBooks.map(book => book.author)
//     return authors
// }
// console.log(getJsAuth([
//     {title: "javascript go", author: "me"},
//     {title: "python to go", author: "curran"},
//     {title: "javascript is good", author: "jenny"}
// ]))
// //Alternate Q1========================================
// function newMult(num1: number, num2: number): number {
//     return num1 * num2
// }
// console.log(newMult(5, 2))
// //Q4===============================================
// function prime(input: number): boolean {
//     if (input <= 1) {
//         return false
//     }
//     for (let i = 2; i <= Math.sqrt(input); i++) {
//         if (input % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(5))
// //Q5===============================================
// class Rectangle {
//     width: number
//     height: number
//     constructor(width: number, height: number) {
//         this.width = width
//         this.height = height
//     }
//     getArea(): number {
//         return this.width * this.height
//     }
// }
// const rectangle = new Rectangle(5, 10)
// console.log(rectangle.getArea())
// //Q6================================================
// class Person {
//     firstName: string
//     lastName: string
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     getFullName() {
//         return this.firstName + " " + this.lastName
//     }
// }
// const person1 = new Person("noah", "wright")
// console.log(person1.getFullName())
// //Q7===============================================
// class Triangle {
//     side1: number
//     side2: number
//     side3: number
//     constructor(side1: number, side2: number, side3: number) {
//         this.side1 = side1
//         this.side2 = side2
//         this.side3 = side3
//     }
//     add3() {
//         return this.side1 + this.side2 + this.side3
//     }
// }
// const triange1 = new Triangle(12, 12, 12)
// console.log(triange1.add3())
// //Q1 for constructors=====================================
// class Calculator {
//     num1: number
//     num2: number
//     constructor(num1: number, num2: number) {
//         this.num1 = num1
//         this.num2 = num2
//     }
//     add() {
//         return this.num1 + this.num2
//     }
//     sub() {
//         return this.num1 - this.num2
//     }
//     mult() {
//         return this.num1 * this.num2
//     }
//     div() {
//         return this.num1 / this.num2
//     }
// }
// const calc = new Calculator(12, 11)
// console.log(calc.div())
// //Q2===========================================
// class newBook {
//     title: string
//     author: string
//     pubYear: number
//     constructor() {
//         this.title = " "
//         this.author = " "
//         this.pubYear = 0
//     }
//     addBook() {
//         return this.title + " is by: " + this.author + " and was published in " + this.pubYear
//     }
// }
// const addedBook = new newBook()
// addedBook.title = "Great Book"
// addedBook.author = "Noah Wright"
// addedBook.pubYear = 2023
// console.log(addedBook.addBook())
// //Q3===============================================
// class Circle {
//     radius: number
//     constructor(radius: number) {
//         this.radius = radius
//     }
//     area() {
//         return Math.PI * this.radius ** 2
//     }
//     circumfrence() {
//         return 2 * Math.PI * this.radius
//     }
// }
// const circleArea = new Circle(5)
// const circleCircum = new Circle(5)
// console.log(circleArea.area())
// console.log(circleCircum.circumfrence())
// //Seeing if i can push something into an array================
// class Minifigs {
//     name: string
//     theme: string
//     partCount: number
//     figList: {name: string, theme: string, partCount: number}[] = []
//     constructor(name: string, theme: string, partCount: number) {
//         this.name = name
//         this.theme = theme
//         this.partCount = partCount
//     }
//     addToArr() {
//         return this.figList.push({
//             name: this.name,
//             theme: this.theme,
//             partCount: this.partCount
//         })
//     }
//     viewList() {
//         return this.figList
//     }
// }
// const addFig = new Minifigs("Arc Trooper Echo", "Star Wars", 7)
// addFig.addToArr()
// const add2ndFig = new Minifigs("Captain Vaughn", "Star Wars", 5)
// add2ndFig.addToArr()
// console.log(addFig.viewList())
// console.log(add2ndFig.viewList())
//Q1 August 8th==================================================
//COMMENT: Was able to do pretty much all on my own. Had to reference old code a few times
var BackAccount = /** @class */ (function () {
    function BackAccount(total, amount) {
        this.total = total;
        this.amount = amount;
    }
    BackAccount.prototype.deposit = function () {
        return this.total + this.amount;
    };
    BackAccount.prototype.withdrawal = function () {
        return this.total - this.amount;
    };
    BackAccount.prototype.checkTotal = function () {
        return this.total;
    };
    return BackAccount;
}());
var newAmount = new BackAccount(500, 250);
console.log("your new total is: ", newAmount.checkTotal());
//Q2===================================================
//COMMENT: Had to ask chatgpt how to do it. Did not get this one or even close. Did remember some of the logic for finding prime numbers
function filterPrime(numbers) {
    return numbers.filter(function (num) {
        if (num <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
}
var arrayNum = [2, 4, 435, 46, 23, 7, 52];
var primeNum = filterPrime(arrayNum);
console.log(primeNum);
function sortTodo(list) {
    list.sort(function (a, b) {
        return a.due.getDate() - b.due.getDate();
    });
    return list;
}
var items = [
    { title: "laundry", desc: "wash clothes", due: new Date("2023-08-12"), stat: "do" },
    { title: "lawn", desc: "mow lawn", due: new Date("2023-08-19"), stat: "do" },
    { title: "cook", desc: "make food", due: new Date("2023-08-11"), stat: "do" },
];
var sortedList = sortTodo(items);
console.log(sortedList);
//Q4============================================
//Q5============================================
function newArr(numbers) {
    return numbers.filter(function (num) {
        if (num % 2 === 0) {
            return true;
        }
    });
}
var input = [2, 3, 5, 43, 64, 3421, 64, 52];
var evenNum = newArr(input);
console.log(evenNum);
