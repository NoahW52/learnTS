var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.quuz + " " + quux.corge + " " + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
//Using "type" better explains what your interface is whenever you hover over it
// function foo(bar: Quux) {
//     return "Hello, " + bar.quuz + " " + bar.corge;
// }
//Lines 19-21 and line 29 are for the foo function and work together
var baz = { quuz: "ABC", corge: 123 };
var fred = new Grault(baz, [1, 2, 3]);
// console.log(foo(baz));
console.log(fred.getGarply());
document.body.innerHTML = fred.getGarply();
//Node doesn't know what this line is but the browser will know because the browser has a global object called document with body and innerHTML
