"use strict";
console.log('Hello World');
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = 'TypScript';
let is_published;
let level;
level = 1;
level = 'a';
function render(documet) {
    console.log(documet);
}
let numbers_1 = [1, 2, '3'];
let numbers_2 = [1, 2, 3];
let numbers_3 = [];
numbers_2.forEach(n => n.toExponential);
let user = [1, 'Max'];
user[0];
user[1];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
;
let myLenght = 2;
console.log(myLenght);
function calculateTax(income, taxYear = 2024) {
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2024);
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Max',
    retire: (date) => {
        console.log(date);
    }
};
let employee_2 = {
    id: 1,
    name: 'Max',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello');
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map