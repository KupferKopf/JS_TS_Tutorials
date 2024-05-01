//First Code part
console.log("Hello World");

//Variables
//Variablenames can not be reserved keywords
// need smart names
// don't start with numbers
// can not contain spaces or hyphens(-) -> firstName
// they are case-sensetive
let name = "Mosh";
console.log(name);

//Constants
//variables can change constants can not
//if no change or default const if change var
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//Primitiv/values Types
//String | Number | Boolean | undefiend | null
//let nameReal = "Max"; //String Literal
//let age = 20; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; // like this or just don't define lol
let selectedColor = null; // Used to clear values from Variables

// JS is a Dynamic Language allowing the change of variable type after inishalising 
// By giving a string a number as a value it changes its type to Number
// test that with typeof variablenName


//Objects
let person = {
    nameReal: "Max",
    age: 20
};
//Dot Notation
person.nameReal = "Jonas";

//Bracket Notation
let selection = "nameReal";
person[selection] = "Georg";

console.log(person.nameReal);

 
//Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);
console.log(selectedColors[1]);


//functions
//Performs a task
function greet(userName, lastName){
    console.log("Hello " + userName + " " + lastName);
}

//testing the funtions
greet("Max", 1);
greet("Jonas", "Hammerer");


//Caluculating a value
function square(number){
    return number * number;
}

//testing the funtions
let number = square(2);
console.log(number);
console.log(square(3));
