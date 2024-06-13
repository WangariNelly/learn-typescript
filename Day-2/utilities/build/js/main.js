"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
///////////////////////////////////////////////////////////////
//required and readonly utility types
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 99
// assignVerified.studentId = "Compscie232"
//Record 
const hexColorMap = {
    red: "FF0000",
    green: "OOFFOO",
    blue: "ooooff",
};
