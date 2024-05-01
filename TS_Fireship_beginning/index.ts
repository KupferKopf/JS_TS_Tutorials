import * as _ from "lodash"; // installed a 3rd party lib with "npm i lodash" -> that created the node-modules folder and the package.jsons -> /n
                             // some libs already have type declarations but lodash has not so it creates an error and won't give any autocomplete options or intelysense
                             // npm i -D @types/lodash is a giant mono repo with comunity maintained types which we install with that comand

//                           
                            
//console.log("hello world");

async function test() {
    return "world"
}

//const url = new URL(); // showing that you can use the dom library


//#######################################
// Type Annotations
//#######################################


// implicit | implicitly understanding from the given context what kind of value should/is saved in the variable
let lucky = 23; // assignes it as a number
//lucky = "23"; // can't set a string as a number, if it wasn't commented it would through an error
                // wouldn't be chaged by normal JS only after running

let unlucky: any = 23; // assignes it as a number but with any can be changed afterwards
unlucky = "23";

let random; // if not directly defind the variable will be an any
random = 12;
random = "Steve";


// explicit | explicitly defined and stayed what kind of value should be inside that variable
let name: string; // you can still give the variables fix types when initializing them 
name = "Steve";

let number: number = 16 // but something like this is not needed as either the : number or the = 16 defines it as a number


// DIY data Types
type Style = 'bold' | 'italic' | 5 | true; // it can be whatever you wan't even strings, numbers and bools

let font: Style;
// font = 'something' //won't work as defined above
font = 'bold'
font = 5
// font = false //false is indee false for this variable
font = true




//#######################################
// Strongtyping 
//#######################################


// Strongtyping Variables/interfaces
interface Person{ // creating a fix layout for objects and their tyes
    first: string;
    last: string;
    [key: string]: any //saying that the two String variables need to be there and be strings but more vaiables can be anything 
}

const person = {
    first: 'Karl',
    last: 'Bauer'
}

const person2 = {
    first: 'Steve',
    last: 'Miner',
    fast: false
}


// Strongtyping functions
function pow (x:number, y:number): string{ // :number defines the type of value you give the function and : string defines the type of value for the return 
    //Math.pow(x, y).toString();           // if the methode wouldn't return anything the : string would be turned into a void
    return Math.pow(x, y).toString();

}

//pow('23', 'boo') // without :number next to x and y it would be allowed but wouldn't work
pow(5,10)



// Strongtyping arrays
const arr: number[] = [] // : number defines that it is a number array so the other value pushes don't work no more

arr.push(1)
//arr.push('23')  // not a number
//arr.push(false) // not a number

const people: Person[] = [] // helpfull when working with interfaces

type MyList = [number?, string?, boolean?] // twopull is a fixlenght array with each slot having a fix given type 
                                           // the ? makes the types optional so the initialization is not need also works on function arguments
const myArr: MyList = []


// Generics
class Observable<T> { // T stands for a placeholder type allowing us to Strongtype it later on in other scenarios
    constructor(public value: T){}
}

let x: Observable<number>; //it can be a number

let y: Observable<Person>; //a Person

let z = new Observable(23); //is a Observable Number


//After the video ended i tried to convert the ts to js but got a couple of errors with the same error number: 
//TS2583: Cannot find name 'X'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later
//X = WeakSet or WeakMap or Set or Map 
//Not sure why those are triggerd as i am using the latest version of es everywhere, atleast for the parts stated in the config file, and even after changing it in my terminal with
//tsc --lib esnext or es2023 or es2015 every time i tried to convert it the errors came, so i have no clue and will just leave it there and if it happens in future projects too i will take a closer look but rn it's not worth investigating