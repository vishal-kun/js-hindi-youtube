// on how data is stored and accessed on that basis data is categorized

// first is PRIMITIVE DATATYPE - all are call-by-value (copy of data is provided.)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.


const id = Symbol('123');
const id2 = Symbol('123');

console.log(id === id2); // after using Symbol even the same value gets different return type.


// second is NON-PRIMITIVE DATATYPE (memory rerference is given)
// Array, Objects, Functions

 const heros = ["ironman", "hulk", "batman"] // array

 // Object
 let myObj = { 
    name: "vishal",
    age: 22,
 }

const myFunction = function(){
    console.log("Hello World.")
}

console.log(typeof heros);
console.log(typeof myFunction); // the function datatype is actually FUNCTION OBJECT.












