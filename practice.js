

// var a= "Hello World";
// console.log(a);

// var number = 5;  //inline comments
// var number = 5;  /*multiline comments*/

// var myName= "uMair";
// myName=9;
// console.log(myName);

// let ourName= "uMair";
// const yourName= "uMair";

// //declaring variable
// var a;
// //assiging variable
// var n= 9;
// var b=2;
// b=n;
// console.log(b);
// //Initilizing Variables w/ Assingnment Operator
// let my = "name";
// //Uninitilized Variables
// var w = 10;
// var e = 10;
// var q = "I am a ";
// w= w+1;
// e= e+1;
// q= q+ "string";
// console.log(w,q);
//camelCase
var myName= "umair"
//Adding two numbers
// var a= 10;
// var b= 20;
// var sum= a+b;
// console.log(sum);

// Subtract two numbers
// var a= 10;
// var b= 20;
// var sub= a-b;
// console.log(sub);

// multiply two numbers
// var a= 10;
// var b= 20;
// var multi= a*b;
// console.log(multi);
// Divde two numbers
// var a= 10;
// var b= 20;
// var divide= a/b;
// console.log(divide);

//Concatinating string with plus operator

// var allStar = "my Name is " + "khan"
// console.log(allStar);
// var myName= "Umair ahmad"
// myName += " software engineer"
// console.log(myName);

//Constucting string with variable

// var officeName = " Zami Digital"
// var myOffice= " we are" + officeName + " we are hiring";
// console.log(myOffice);

//appending 
// var officeName = " Zami Digital";
// var officeBoy= "Azeem";
// officeBoy += officeName;
// console.log(officeBoy);

//finding length of string
// var myName = "Umair";
// console.log(myName.length);

// var myName = "Umair";
// console.log(myName[3]);

// var myName = "Umair";
// console.log(myName.length-1);

//Array
// let newArray= [1,2,"mu"];
// console.log([newArray.length]);

// let newArray= [1,2,"mu"];
// console.log([newArray[2]]);


// var muArray = [23,34,54];
// muArray[2]= 23;
// console.log(muArray);




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
// function greaterEqual(val) {
//     if(val >= 20){
//         return "i am greaterthen";
//     }
//     else{
//         return "i am lesser than";
//     }
   
// }
// console.log(greaterEqual(1));
