"use strict";
//syntax
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('Nelly'));
console.log(isObj(34));
console.log(isObj(null));
console.log(isObj({ name: 'John' }));


// const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
// if (Array.isArray(arg) && !arg.length)
// return {
// arg,is: false
// }
// }