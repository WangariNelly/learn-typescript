//syntax

const echo = <T>(arg: T): T => arg 

const isObj = <T> (arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null ) 
} 


console.log(isObj(true));
console.log(isObj('Nelly'));
console.log(isObj(34));
console.log(isObj(null));
console.log(isObj({name: 'John'}));