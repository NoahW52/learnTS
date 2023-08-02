// class Grault {
//     private garply: string

//     constructor(quux: Quux, waldo: number[]) {
//         this.garply = quux.quuz + " " + quux.corge + " " + waldo
//     }

//     public getGarply(){
//         return this.garply
//     }
// }

// //Can also define an interface as "type Quuz = {}"
interface Quux {
    quuz: string
    corge: number
}
// Using "type" better explains what your interface is whenever you hover over it
//  function foo(bar: Quux) {
//      return "Hello, " + bar.quuz + " " + bar.corge;
//  }

// //Lines 19-21 and line 29 are for the foo function and work together

let baz = { quuz:"ABC", corge: 123 }

// let fred: Grault = new Grault(baz, [1, 2, 3])

// // console.log(foo(baz));
// console.log(fred.getGarply())

// document.body.innerHTML = fred.getGarply()
//Node doesn't know what this line is but the browser will know because the browser has a global object called document with body and innerHTML

  function foo(bar: Quux) {
      return "Hello, " + bar.quuz + " " + bar.corge;
}

console.log(foo(baz));