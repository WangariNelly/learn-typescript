"use strict";
//type aliases
//convert to more or less specific type 
let a = 'hello';
let b = a; //less specific type
let c = a; //more specific
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVar = addOrConcat(3, 2, 'concat');
let myVar1 = addOrConcat(3, 2, 'concat'); //asertion..specifing the type even when wrong
