"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// some libs already have type declarations but lodash has not so it creates an error and won't give any autocomplete options or intelysense
// npm i -D @types/lodash is a giant mono repo with comunity maintained types which we install with that comand
//                           
//console.log("hello world");
function test() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "world"];
        });
    });
}
//const url = new URL(); // showing that you can use the dom library
//#######################################
// Type Annotations
//#######################################
// implicit | implicitly understanding from the given context what kind of value should/is saved in the variable
var lucky = 23; // assignes it as a number
//lucky = "23"; // can't set a string as a number, if it wasn't commented it would through an error
// wouldn't be chaged by normal JS only after running
var unlucky = 23; // assignes it as a number but with any can be changed afterwards
unlucky = "23";
var random; // if not directly defind the variable will be an any
random = 12;
random = "Steve";
// explicit | explicitly defined and stayed what kind of value should be inside that variable
var name; // you can still give the variables fix types when initializing them 
name = "Steve";
var number = 16; // but something like this is not needed as either the : number or the = 16 defines it as a number
var font;
// font = 'something' //won't work as defined above
font = 'bold';
font = 5;
// font = false //false is indee false for this variable
font = true;
var person = {
    first: 'Karl',
    last: 'Bauer'
};
var person2 = {
    first: 'Steve',
    last: 'Miner',
    fast: false
};
// Strongtyping functions
function pow(x, y) {
    //Math.pow(x, y).toString();           // if the methode wouldn't return anything the : string would be turned into a void
    return Math.pow(x, y).toString();
}
//pow('23', 'boo') // without :number next to x and y it would be allowed but wouldn't work
pow(5, 10);
// Strongtyping arrays
var arr = []; // : number defines that it is a number array so the other value pushes don't work no more
arr.push(1);
//arr.push('23')  // not a number
//arr.push(false) // not a number
var people = []; // helpfull when working with interfaces
// the ? makes the types optional so the initialization is not need also works on function arguments
var myArr = [];
// Generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x; //it can be a number
var y; //a Person
var z = new Observable(23); //is a Observable Number
