Vid link
https://www.youtube.com/watch?v=W6NZfCO5SIk

JS = Javascript

What is JS?
One or the biggest growing Programming languages at the time used by big companies for many different projects

What can you can do with JS?
	Web/Mobile Apps
	Realtime Networking Apps
	Command-line Tools 
	Games

Where runs JS?
In browser with JS Engines (Firefox has SpiderMonkey and Chrome has V8)
Node (is a C++ program containing the JS Engine)

What is the difference between ECMAScript and JS?
ECMAScript -> Just Specifications
JS -> actual Programming language 

JS most used IDE is Visual Studio Code or in shot VS Code
Now to start using JS we need VS Code and node.js installed on the pc
Now starting a project by creating a folder and opening it in VS Code, then you create an html file and write "!" and press enter this generates start html code there you can add stuff in html part (html duh) 
in order to run the file smoothly in the browser you need an extension called live server
now for the script part you can add it in the header part or the body part of the html file, the placement affects the load time of the page as it is processed from top to bottom so it is recommended to first have the visual code (html) and then have the functionalities (JS) 
In addition JS code can become quite large and in general it's recommended that you separate different parts as much as possible so considering that you can create a separate JS file (.js) and just type the code there and reference it in the html file 

You can look at the page by opening it either with live server (after installing the plugin) and look at the console in the browser with f12 or open the folder with those files in the cmd and use the command "node file.js" to see what the js code does

Code below explains the different code parts JS has:
Variables, Constants, <-- Primitive/value Types 
Objects, Arrays and Functions <-- Reference types


```
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


```

