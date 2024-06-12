let strArray = ['two','hello', 'Nelly'];

let football = ['soccerball', 2354, 'Klopp'];

let mixedData = ['evh',1997, true];

//only knows the types  not the order
strArray[1] = 'Wangari';
strArray.push('Hello');

//   strArray = football;

football = strArray;

//tuple - specific lengths and order 
let myTuple: [number, boolean, String ];
let variable = [1, true, 'Nelly'];

//objects
let myObject: object;
myObject = [];

const userData = {
    name: 'Cathy',
    DOB: 1996,
    active: true
}

userData.active = true;

// custom types 
//type and interfaces - like a class
interface userDetails {
    name?: string,
    DOB: number,   //making a property optional
    active: boolean,
    accounts: (number | string)[]; //NB Syntax
}

let member1: userDetails = {
    // name: 'Cathy',
    DOB: 1996,
    active: false,
    accounts: ['Mavuno', 27154, 'Fixed']
}
 
const registerUser = (user: userDetails) => {
    if (user.name){
        return `Registered ${ user.name.toUpperCase()}`;
    }
    return `Registered!`
    
};

console.log(registerUser(member1));


//Enums - added during runtime.

enum Grade {
    E = 3,
    D,
    C,
    B,
    A
}
console.log(Grade.D);


//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

//use of the never type 
const numberOrString = (value: number | string):
string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError('this is a never');
}