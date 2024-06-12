"use strict";
let strArray = ['two', 'hello', 'Nelly'];
let football = ['soccerball', 2354, 'Klopp'];
let mixedData = ['evh', 1997, true];
//only knows the types  not the order
strArray[1] = 'Wangari';
strArray.push('Hello');
//   strArray = football;
football = strArray;
//tuple - specific lengths and order 
let myTuple;
let variable = [1, true, 'Nelly'];
//objects
let myObject;
myObject = [];
const userData = {
    name: 'Cathy',
    DOB: 1996,
    active: true
};
userData.active = true;
let member1 = {
    // name: 'Cathy',
    DOB: 1996,
    active: false,
    accounts: ['Mavuno', 27154, 'Fixed']
};
const registerUser = (user) => {
    if (user.name) {
        return `Registered ${user.name.toUpperCase()}`;
    }
    return `Registered!`;
};
console.log(registerUser(member1));
//Enums - added during runtime.
var Grade;
(function (Grade) {
    Grade[Grade["E"] = 3] = "E";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["A"] = 7] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);
