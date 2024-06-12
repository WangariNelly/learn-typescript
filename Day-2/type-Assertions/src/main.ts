//type aliases

type One = string;
type Two = string | number;
type Three = 'hello';

//convert to more or less specific type 

let a: One = 'hello';
let b = a as Two;   //less specific type
let c = a as Three; //more specific


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if ( c === 'add') return a  + b;
  return '' + a + b;
}

let myVar: string = addOrConcat( 3,2,'concat') as string

//wrong
let myVar1: number = addOrConcat( 3,2,'concat') as number //asertion..specifing the type even when wrong

//THE DOM
const img1 = document.querySelector('img') as HTMLImageElement;
const img = document.getElementById('#img');

img1.src


const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString;
year.setAttribute("datetime",thisYear);
year.textContent = thisYear
