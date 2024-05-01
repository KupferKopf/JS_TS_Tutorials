YT Link:
https://www.youtube.com/watch?v=d56mG7DezGs&list=PLb_P2vu1uovmXu_Wih_RMvyF7EOFvVBol&index=5


### Section 1 | Getting started with TS
#### 1. Introduction
	what is TS?
	Why do we need it?
	How is it diffrent from JS?

TS is a programming language build on top of JS to help with its problems.
It has multiple extra features allowing a smother and easier proces when it comes to coding JS related stuff
Also as TS is build on JS every JS file is a valid TS file

TS implements the option for Statically-typed (not being able to change the type of a variable after initialization)

TS is JS with Typchecker, by compiling the code beforehand and reporting those errors  
Also adds Code completion, Refactoring and other new features

Problem is that browsers can't use TS code only JS so TS code needs to be compiled to JS bevor use -> this process is called "Transpilation"
For simple Applications TS might be unhelpful but for medium and big projects with multiple people it helps with catching bugs

#### 2. Setup environment
Node needs to be installed
npm i(install) -g(globally, on the entire machine) typescript
tsc -v or tsc --version (to see version)

#### 3. Creating first TS program
tsc filename.ts -> converts the ts to js

```
console.log('Hello World');

  

let age: number = 20; // : number anotates it to only be a number and nothing else, but considering we directly set the variable as a number(in this case 20) the : number would be unnecesery

//age = 'a'; // throws an error as it is not a number
``` 


#### 4. Config TS compiler
// created by 'tsc --init'

// ES2016 is the savest option as it is implemented in every type of browser

// adding the rootDir by creating a src folder and moving the ts file there so the compiler knows from where he takes the TS files he needs to compile to JS

// adding the outDir so the compiler knows where to put the JS files afterwards

// adding the removeComments so the JS files don't have the comments that the TS files have and making the code shorter

// adding the noEmitOnError on true prohibits us on creating JS files if the TS files has errors

// now running tsc doesn't need a file argument anymore and automaticaly creates the dist folder and moves the JS file there


#### 5. Debugging TS applications

add a debug point 
click the debug panel on the left 
click 'create a launch.json file'
select node from the dropdown
creates a file called launch.json

```
"preLaunchTask": "tsc: build - TS_Mosh_beginning/tsconfig.json", // tells vs code to use the TS compiler with it using this config file

```

Thats the important part and depending on the folder structure the path might be different (in the video the path was just tsconfig.json at the end so consider that)
Now starting a debugging session has all the basic features but also allows for the use of watches where you can single out a variable and watch that change bzw observe that variable easier throughout the debugging


### Section 2 | Fundamentals

| JS data Types                                                           | TS data Types                                      |
| ----------------------------------------------------------------------- | -------------------------------------------------- |
| - number<br>- string<br>- boolean<br>- null<br>- undefined<br>- objects | - any<br>- unknown<br>- never<br>- enum<br>- tuple |
#### The any Type

```
let level; // if nothing of both happens the type of the variable will be any

level = 1; // with the any type you can work around the typecatcher/typereader and assigne it any type of value with out triggering an error

level = 'a'; // not recommended to be used, but if be carefull doing so

  

// if not given a type the argument inside a function will throw an error Parameter | 'documet' implicitly has an 'any' type.

function render(documet: any){ // you can fix it by anotating it with : any but for many functions that might be tidious you can disable it by going to your tsconfig.json file and uncomment

    console.log(documet)       // "noImplicitAny" and set it to false but that reverts a lot when not the mayor features of TS

}
```

#### Arrays

```
//###

// arrays

let numbers_1 = [1,2,'3']; // arrays, normaly in JS, can contain different types of values but that can lead to probblems so you can also anotate the variables

let numbers_2: number[] = [1,2,3];

let numbers_3 = []; // any also works with arrays

  

numbers_2.forEach(n => n.toExponential)// TS also offers autocomplete which is smth normal JS does not
```

#### Tuples

```
//###
// tupels -> a fixed lenght & fixed type array most helpfull with only 2 variables in order to keep the array easaly readable

// 1, 'Max'

let user: [number, string] = [1, 'Max']; // fix lenght and fix type array

user[0]//. would offer all number comands as autocomplete

user[1]//. would offer all string comands as autocomplete

//user.push(1);// allows to store a 3rd value which shouldn't be possible / is a risk
```

#### Enums

```
//###

// enums

const small = 1;

const medium = 2;

const large = 3;

  

//PascalCase -> a naming Convetion in which every Words first letter needs to be written in upper-case

enum Size { Small = 1, Medium, Large}; // when given no value the first value will be = 0, the second = 1 and so on

                                             // when given a number it will automatically assend from that value by 1 for every value

                                             // if given a String value you will need to individually define the value for each enum part

let mySize: Size = Size.Medium;

console.log(mySize); // returns 2

  

const enum Lenght { Short = 1, Medium, Long}; // adding const makes the converted JS code simpler then just an enmu as it fixes the value of the enum for the entire code

  

let myLenght: Lenght = Lenght.Medium;

console.log(myLenght);
```

#### Functions

```
//###

// functions

  

// having no return value sets the type of the function to void, returning any kind of value turns the function into that values typ

// defining a type bevorhand gives us the option of getting an error if we were to return a wrong type

// "noUnusedParameters": true is a config used for getting warnings if values in functions are not used

// "noImplicitReturns": true is a config used for getting warning if a return statement is missing

// "noUnusedLocals": true is a config used for getting a warning if a local variable is not used

function calculateTax(income: number,  taxYear = 2024): number{

    if(taxYear < 2024) // _ can be used to make numbers more readable | it does not affect the number itself or its value

        return income * 1.2;

    return income * 1.3;

}

  

/*

function calculateTax_NotClean(income: number,  taxYear?: number): number{

    if((taxYear || 2024) < 2024) // _ can be used to make numbers more readable | it does not affect the number itself or its value

        return income * 1.2;

    return income * 1.3;

}

*/

  

calculateTax(10_000, 2024); // you could pars more then the needed amount of variable, in JS atleast, but TS gives you an error if you do so

calculateTax(10_000);       // you can also make parts/variables of functions optional by adding the ? bevor them

                            // but by removing a value that might be needed in the function you will have to add a default case -> if((taxYear || 2024) < 2024) but thats not so nice

                            // so a cleaner version is changing the 'taxYear?: number' for 'taxYear = 2024' so if theres no value given for taxYear it will be set to 2024 and if one is given

                            // it will override the 2024
```

#### Objects

```
//###

// objects

  

// by hovering over employee you can see its structure

let employee: {

    readonly id: number,

    name: string,

    retire: (date: Date) => void // adding a methode to our object, using a Data var and returning void

} = {

    id: 1,

    name: 'Max', // JS would allow this but TS tells us if a object does not have a var that we try to address

    retire: (date: Date) => { // defining the insides of the function

        console.log(date);    

    }

};

// all in all it looks a bit ugly and unlean

  

//employee.id = 0; // readonly makes it impossible to modify id
```


### Section 3 | Advanced Types

#### Type aliases

```
//###

// Type aliases

/*

let employee: {

    readonly id: number,

    name: string,

    retire: (date: Date) => void

} = {

    id: 1,

    name: 'Max',

    retire: (date: Date) => {

        console.log(date);    

    }

};

  

    3 Problems with this implementation of employee

        1. in order to create another employee you woul need to repeat that code block over and over again -> 'DRY' Don't repeat yourself

        2. Other employees might have diffrent shapes than this one

        3. overall this code is hard to read and understand

  

    This is where Type aliases come into play -> a custome made type

*/

  

type Employee = { // now we can use this type with this structure everywhere in our code

    readonly id: number,

    name: string,

    retire: (date: Date) => void

}

  

let employee_2: Employee = {

    id: 1,

    name: 'Max',

    retire: (date: Date) => {

        console.log(date);    

    }

};
```

#### Unions and intersections

```
//###

// Union Types -> with this we can give Variable or Function Parameter more the one type

function kgToLbs(weight: number | string): number {

    // weight. only shows the methodes string and number have in common

    // Narrowing is a methode used to "narrow" down the two types in a more spezific type

    if(typeof weight === 'number')

        return weight * 2.2; // now that we know its a number we have all the number methodes to our disposal

    else

        return parseInt(weight) * 2.2;  // and here we know its a string so we have all string methods available

}

  

kgToLbs(10);

kgToLbs('10kg');
```

#### Intersection Types

```
//###

// Intersection Types

//let weight: number & string; // a var thats num and string at once is not possible but there are some more realistical options

type Draggable = { // one custome type

    drag: () => void

};

  

type Resizable = { // a second custome type

    resize: () => void

}

  

type UIWidget = Draggable & Resizable; // a third custom type using the first two

  

let textBox: UIWidget = { // a var having this combi type as it's type and so we can define two diffrent types/functions

    drag: () => {},       // but why does it need two custom types to make a third to have the two methods from the two seperate ones couldn't you just skip the combining

    resize: () => {}      // and just put both of the functions in one custom type -> maybe there's a case that i don't see at the moment but it seems a bit redundant

}
```

#### Literal types

```
//###

// Literal Types -> if we want to limit the values that can be assigned to a variable

type Quantity = 50 | 100;

let quantity: Quantity = 100; //we want it to be a extact or specific or have a literal value

  

type Metric = 'cm' | 'inch';
```

#### Nullable Types

```
//###

// nullable Types

function greet(name: string | null | undefined) { // with null or undefined we can still run the function returning a fixed respons

    if(name)

        console.log(name.toUpperCase());

    else

        console.log('Hello');

}

  

greet(null);      // this would throw an error -> Argument of type 'null' is not assignable to parameter of type 'string'

greet(undefined); // you can turn it off in the config file "strictNullChecks": false but thats not so usefull
```

#### Optional Chaining

```
//###

// Optional Chaining

type Customer = {

    birthday?: Date

};

  

function getCustomer(id: number): Customer | null | undefined{

    return id === 0 ? null : {birthday: new Date()}; //if the id is 0 return null if not return the Customer object with its birthday

}

  

let customer = getCustomer(1);

//if (customer !== null && customer !== undefined) can be removed and replaced with

// Optional property acces operator -> by adding a '?' so it's optional duh | 0 returns undefined and 1 returns an actual date

    console.log(customer?.birthday?.getFullYear());

  
  

// Optional element acces operator -> only lets you access the element if it exists

// if(customers !== null && !== undefiend)

// customers[0]

// OR

// customers?.[0]

  

// Optional call

let log: any = null; //(message: string) => console.log(message)

log?.('a'); // now it will only be called if log is referencing an actuall function if not it returns undefined
```


