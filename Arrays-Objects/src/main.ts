//TYpe aliases

type stringOrNumberArray = (string | number)[];
type userDetails  = {
    name?: string,
    DOB: number,   //making a property optional
    active: boolean,
    accounts: stringOrNumberArray  // type alias
}


//literals
let userName = 'Nelly';
let myName: 'Nelly' | 'Wangari' | 'Kamenya';
myName = 'Kamenya';

//function 

const multiply = (a: number , b: number ):  number  => {
   return a * b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

