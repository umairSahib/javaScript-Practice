//push add new element in array
// let myPet=["Jolly","Johny"];
// myPet.push("push")
// console.log(myPet);
//pop remove last elemet of array
// let myPet=["Jolly","Johny","jooojny"];
// myPet.pop("pop")
// console.log(myPet);

//Shift remove first element of array 
// let myPet=["Jolly","Johny","jooojny"];
// myPet.shift("shift")
// console.log(myPet);

//unshift add an element begining in array
// let myPet=["Jolly","Johny","jooojny"];
// myPet.unshift("unshift")
// console.log(myPet);

//passing arguments to the Function
// function myFunction(a, b) {
//     console.log(a-b);

// }
// myFunction(19, 4);

// function myFunctionadd(c, d) {
//     console.log(c+d);

// }
// myFunctionadd(19, 4);

//Scops local scope in function
// function localScope() {
//     var myScope= 5;
//     console.log(myScope);
    
// }
// localScope();

//Global Scope

// var globalScope = "I am Global Scope";
// function myScope() {

//     var globalScope = "I am local Scope";
//     return globalScope;
    
// }
// console.log(myScope());
// console.log(globalScope);

//return a value from function with return

// function returnValue(num) {

//     return num-19;
    
// }
// console.log(returnValue(29));

//Understanding undefined value returned from a function
// var sum= 3;
// function sumOf() {
//     sum += 3;
    
// }
// sumOf();

//Boolean 
//comparison with equality operator

// function testEqual(val) {
//     if (val== 22) {
//         return "equal";
//     }
//     return "not equal"
    
// }
// console.log(testEqual(20));

//Strict operator

// function testStrict(val) {
//     if (val === 22) {
//         return "equal";
//     }
//     return "not equal"
    
// }
// console.log(testStrict(1));

//equality operator == is also type conversion operator it converts string into number

// function testStrict(a, b) {
//     if (a === b) {
//         return "equal";
//     }
//     return "not equal"
    
// }
// console.log(testStrict(1, '1'));

//not equal operator

// function testStrict(a, b) {
//     if (a != b) {
//         return "equal";
//     }
//     return "not equal"
    
// }
// console.log(testStrict(1, 3));
//equal and greater than and eqaual and lesser than operators

// function greaterEqual(val) {
//     if(val >= 20){
//         return "i am greaterthen"
//     }
//     if(val <= 10){
//         return " i am a lesserthan"
//     }

    
// }
// console.log(greaterEqual(0));

//Comparison with logical and operator
// function greaterEqual(val) {
//     if(val >= 20 && val <= 10){
//         return "i am greaterthen";
//     }
//     return "no";
// }
// console.log(greaterEqual(1));
//logical or operator

// function greaterEqual(val) {
//     if(val >= 20 || val <= 10){
//         return "i am greaterthen";
//     }
//     return "i am lesser than";
// }
// console.log(greaterEqual(1));

//If Else Statement
function greaterEqual(val) {
    if(val >= 20){
        return "i am greaterthen";
    }
    else{
        return "i am lesser than";
    }
   
}
console.log(greaterEqual(1));
