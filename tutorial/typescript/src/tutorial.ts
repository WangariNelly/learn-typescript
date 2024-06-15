 
 let awesomePerson: string = "Nelly";
awesomePerson = awesomePerson.toLowerCase();
 console.log(awesomePerson);

 //union type
 let tax: number | string = 10;
 tax = "20 dollars";


 //function to check if name is listed in an array of string type
    const userNames: string[] = ["Nelly", "James", "Jane"];

    function isName(name: string): boolean {
        return userNames.includes(name)
    }

    let nameListed = "John"

    if (isName(nameListed)) {
        console.log(`${nameListed}`)
    } else{
        console.log('Absent')
    }


    //Optional / default parameters

    function addTotalPrice(price: number, tax: number, discount?: number): number {
        return price -  tax - (discount || 0)
    } 

    const calculateTotal = addTotalPrice( 200, 50, 10);
    console.log(calculateTotal)

//typeguards
  function inputProcess(input: number | string){
    if (typeof input === 'number'){                 //type guard
       console.log(input * 2) 
    }else {
        console.log(input.toLowerCase());
  }
}

inputProcess(10);
inputProcess('NELLY')

//objects as parameters 
function createDatabase({ id }: {id: number}): {
    id: number;
    isActive: boolean;
}{ 
    return { id,isActive: id % 2 === 0};
}

const firstEntry  = createDatabase({ id: 1});
const secondEntry  = createDatabase({ id: 4})
console.log(firstEntry,secondEntry)

//alternative

function createStudent(student:{name: string, id: number}): void 
{
    console.log(`Welcome to the course ${student.name.toUpperCase()}`)
}

const newSudent = {
    name: "Nelly",
    id: 123
}
createStudent(newSudent);


function processData( 
    input: string | number, 
    config: {reverse: boolean} = { reverse: false }): string | number {
    if ( typeof input === 'number'){
        return input * input
    }else {
       return  config.reverse
       ? input.toUpperCase().split('').reverse().join('')
       : input.toUpperCase();
        
    }
}
console.log(processData(10));
console.log(processData('hello', { reverse: true }));
