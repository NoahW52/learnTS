//TOPIC: Learning Typescript basics: Undefined and Null============================================

//Undefined: A value defined by default by javascript. It's assigned to any variable that doesn't have any initial value yet.
//When something returns undefined

let title: string;
//with let, you can get away with not assigning a value, but with const, we would have to assign a value 

console.log("title = " + title)

if( !title) {
    console.log('The value of title is not known.')
}

//TOPIC: Learning null in Type Annotation================================================

//Null is explicitly and intentionally assigned and is simply just not filled in YET
//Used in cases when you know a value may sometimes be absent.

let upper: string = null;

console.log('upper = ' + upper)

if( !upper) {
    console.log("The value of title is not know yet.")
}

//NOTES FOR UNDEFINED AND null===========================================================

//Both Undefined and null are falsy 
//Both undefined and null have to do with the value of something not existing.
//Recommended to use null, because it helps the programmer understand that a value is intentionally not assigned rather than missing something.
