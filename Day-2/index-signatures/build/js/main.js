"use strict";
// index signatures 
const todaysTransaction = {
    Pizza: -10,
    Books: -4,
    Job: 50
};
console.log(todaysTransaction.Books);
let prop = "Books";
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
;
const student = {
    name: "Nelly",
    GPA: 3.5,
    classes: [200, 300]
};
// console.log(student.name)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const myIncome = {
    salaries: 500,
    bonus: 100,
    sidehustle: 300
};
for (const money in myIncome) {
    console.log(myIncome[money]);
}
