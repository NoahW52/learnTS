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
function mult(num1, num2, op) {
    switch (op) {
        case "multi":
            return num1 * num2;
    }
}
console.log(mult(3, 4, "multi"));
//Q2==================================================
function find5(newArr) {
    return newArr.filter(function (wordArr) { return wordArr.length > 5; });
}
console.log(find5(["word", "jennys", "arcEcho", "noah"]));
function getJsAuth(books) {
    var jsBooks = books.filter(function (book) { return book.title.indexOf("javascript") >= 0; });
    var authors = jsBooks.map(function (book) { return book.author; });
    return authors;
}
console.log(getJsAuth([
    { title: "javascript go", author: "me" },
    { title: "python to go", author: "curran" },
    { title: "javascript is good", author: "jenny" }
]));
//Alternate Q1========================================
function newMult(num1, num2) {
    return num1 * num2;
}
console.log(newMult(5, 2));
//Q4===============================================
function prime(input) {
    if (input <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(prime(5));
//Q5===============================================
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());
//Q6================================================
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person1 = new Person("noah", "wright");
console.log(person1.getFullName());
//Q7===============================================
var Triangle = /** @class */ (function () {
    function Triangle(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    Triangle.prototype.add3 = function () {
        return this.side1 + this.side2 + this.side3;
    };
    return Triangle;
}());
var triange1 = new Triangle(12, 12, 12);
console.log(triange1.add3());
//Q1 for constructors=====================================
var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.add = function () {
        return this.num1 + this.num2;
    };
    Calculator.prototype.sub = function () {
        return this.num1 - this.num2;
    };
    Calculator.prototype.mult = function () {
        return this.num1 * this.num2;
    };
    Calculator.prototype.div = function () {
        return this.num1 / this.num2;
    };
    return Calculator;
}());
var calc = new Calculator(12, 11);
console.log(calc.div());
//Q2===========================================
var newBook = /** @class */ (function () {
    function newBook() {
        this.title = " ";
        this.author = " ";
        this.pubYear = 0;
    }
    newBook.prototype.addBook = function () {
        return this.title + " is by: " + this.author + " and was published in " + this.pubYear;
    };
    return newBook;
}());
var addedBook = new newBook();
addedBook.title = "Great Book";
addedBook.author = "Noah Wright";
addedBook.pubYear = 2023;
console.log(addedBook.addBook());
//Q3===============================================
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.circumfrence = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var circleArea = new Circle(5);
var circleCircum = new Circle(5);
console.log(circleArea.area());
console.log(circleCircum.circumfrence());
//Seeing if i can push something into an array================
var Minifigs = /** @class */ (function () {
    function Minifigs(name, theme, partCount) {
        this.figList = [];
        this.name = name;
        this.theme = theme;
        this.partCount = partCount;
    }
    Minifigs.prototype.addToArr = function () {
        return this.figList.push({
            name: this.name,
            theme: this.theme,
            partCount: this.partCount
        });
    };
    Minifigs.prototype.viewList = function () {
        return this.figList;
    };
    return Minifigs;
}());
var addFig = new Minifigs("Arc Trooper Echo", "Star Wars", 7);
addFig.addToArr();
var add2ndFig = new Minifigs("Captain Vaughn", "Star Wars", 5);
add2ndFig.addToArr();
console.log(addFig.viewList());
console.log(add2ndFig.viewList());
