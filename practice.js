

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

// // Switch Statement
// function caseSensitive(val) {
//     var answer ="";
//    switch(val){
//     case 1:
//         answer= "alpha"
//         break;
//     case 2:
//         answer= "beta"
//         break;
//     case 3:
//         answer= "gamma"
//         break;

//     case 4:
//         answer= "delta"
//         break;
        
//    }
//     return answer;
// }
// console.log(caseSensitive(3));

//default Switch  Statement
// function caseSensitive(val) {
//     var answer ="";
//    switch(val){
//     case "a":
//         answer= "cat"
//         break;
//     case "b":
//         answer= "monkey"
//         break;
//     case "c":
//         answer= "donkey"
//         break;
//       default:
//         answer="stuff";
        
//    }
//     return answer;
// }
// console.log(caseSensitive("b"));

//returning boolean values from function

// function trueFalse(a,b){
//     return a > b;
// }
// console.log(trueFalse(39, 30));

//javaScript Object

//  var jolly={
//     name:"Jolly",
//     legs: 4,
//     color: "white",
//  }
//  console.log(jolly);
//changing object values
//  var jolly={
//     name:"Jolly",
//     legs: 4,
//     color: "white",
//  }
//  jolly.name ="john"
//  console.log(jolly.name);
//Adding Object
//  var jolly={
//     name:"Jolly",
//     legs: 4,
//     color: "white",
//  }
//  jolly["pet"] ="john";
//  console.log(jolly);


//delete object

//  var jolly={
//     name:"Jolly",
//     legs: 4,
//     color: "white",
//  }
//  delete jolly.legs;
//  console.log(jolly);



//Check Proprty In object

//  var jolly={
//     name:"Jolly",
//     legs: 4,
//     color: "white",
//  };
//  function checkObject(checkProp) {
//    if(jolly.hasOwnProperty(checkProp)){
//       return jolly[checkProp];
//    }
//    else{
//     return "not found"
//    }
   
//  }
//  console.log(checkObject("name"));

//Accesing nested arrays

// var myArray =[
//    {
//       "name": "Umair",
//       "fName": "ahmad",
//       bothers: [
//          "Shoaib",
//          "Ijaz",
//          "Zubair",
//          "Umair",
//          "Ali",
//       ]

//    },
//    {
//       "office": "zootech",
//       address:[
//          "bazeed",
//          "pur",
//       ]
//    },
// ]
// var otherArray = myArray[0].bothers[3];
// console.log(otherArray);

//While Loop

// var whileData=[];
// var i = 0;
// while (i<5) {
//    whileData.push(i);
//    i++;
// }
// console.log(whileData);

//for Loop

// var myArray =[];
// for(var i = 2; i < 20; i++){
//     myArray.push(i);
// }
// console.log(myArray);
//even number
// var myArray =[];
// for(var i = 0; i < 20; i+=2){
//     myArray.push(i);
// }
// console.log(myArray);
// //odd number
// var myArray =[];
// for(var i = 0; i < 20; i+=3){
//     myArray.push(i);
// }
// console.log(myArray);

//count backward numbers
// var myArray =[];
// for(var i = 30; i > 1; i-=3){
//     myArray.push(i);
// }
// console.log(myArray);

// var myArr=[21,3,546,6]
// total=0;
// for(var i=0; i<myArr.length; i++){
//     total += myArr[i];
// }
// console.log(total);

//ternary opertor
// function ternoryOpertor(a, b){
//     return a === b ? true : false ;
//     // return a === b;
// }
// console.log(ternoryOpertor(12, 34));
//multiple ternary operator

// function checkAge(age){
//     return age < 0 ? "not adult" : age > 20 ? "adult" : "kid"
// }
// console.log(checkAge(0));

//Mutate an array declared with const

// const an= [1,4,56,7]
// function anArray (){
//     "use strict"
//     an[0]= 21;
//     an[2]= 21;
//     an[1]= 21;
// }
// anArray();
// console.log(an);

//Arrow Function
// const concatArray = (arr1, arr2) => arr1.concat(arr2);
// console.log(concatArray([1,2,3], [4,5,6]));

//paresInt Function in Js

// let stringConvert = "12";
// let number = parseInt(stringConvert);
// console.log(number);

// write higher order arrow function

// const increment = (function(){
//     return function increment(number, value=2){
//         return value+ number;
//     }
// })();
// console.log(increment(5,3));
// console.log(increment(334));

//spread operator

// let arr=[1,2,3,4];
// let arr1=[1,2,3,4];
// let combinedArray= [...arr, ...arr1];
// console.log(combinedArray);

//use the spread operator to evalute array in-place

// let arr = [12,434,56,76,454];
// let arr3;
// (function(){
//  arr3= arr;
//  arr[0]= 1234;
// })();
// console.log(arr3);

//Object destructring 

// let obj ={
//     a: "umair",
//     b: "Zammy",
//     c: "can",
// }
// let {a,b,c}=obj;
// console.log(a);
// console.log(b);
// console.log(c);

// let {a: me, b: you, c: others }= obj;
// console.log(me);
// console.log(you);
// console.log(others);

//destructing nested assignment 

// Nested object
// const person = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'Anytown',
//       state: 'CA',
//       zip: '12345'
//     },
//     contact: {
//       phone: '555-1234',
//       email: 'john@example.com'
//     }
//   };
  
//   // Destructuring nested objects
//   const {
//     name,
//     age,
//     address: { street, city, state, zip },
//     contact: { phone, email }
//   } = person;
  
//   console.log(name);
//   console.log(age); 
//   console.log(street);
//   console.log(city); 
//   console.log(state); 
//   console.log(zip);
//   console.log(phone); 
//   console.log(email); 
  
// template literals

let name = "umair";
let age = 24;
let combined= `Hello my name is ${name} and i am ${age} years old`
console.log(combined);