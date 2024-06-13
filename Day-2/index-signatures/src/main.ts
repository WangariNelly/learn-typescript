// index signatures 

// interface TransactionObj{
//   Pizza: number,
//   Books: number,
//   Job: number
// }
interface TransactionObj{
 [index: string]: number                  // index signature
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -4,
  Job: 50
}

console.log(todaysTransaction.Books)

let prop: string = "Books";
console.log(todaysTransaction[prop])


const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for ( const transaction in transactions){
    total += transactions[ transaction ]
  }
  return total;
}
console.log(todaysNet(todaysTransaction));


/////////////////////////////////////////////////////////////////
interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string
  GPA: number
  classes?: number[] //when property is undefined you provide its type and undefined
};
const student: Student = {
  name: "Nelly",
  GPA: 3.5,
  classes: [200,300]
}

// console.log(student.name)
for (const key in student){
  console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
})