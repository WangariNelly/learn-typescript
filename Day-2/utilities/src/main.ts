interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?: boolean
}
  
  const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {
      ...assign, ...propsToUpdate
    }
  }
  const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
  }
  console.log(updateAssignment(assign1, { grade: 95}));
  const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})

  ///////////////////////////////////////////////////////////////
  //required and readonly utility types

  const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
  }

  const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true }

    // assignVerified.grade = 99
    // assignVerified.studentId = "Compscie232"
  
    //Record 
    const hexColorMap: Record<string, string> = {
      red: "FF0000",
      green: "OOFFOO",
      blue: "ooooff",
    };

    type Students = "Sara" | "Kelly"; 
    type LetterGrades = "A" | "B" | "C";
     const finalGrades: Record<Students, LetterGrades> = {
      "Sara": "B",
     "Kelly": "C"
     };

     interface Grade {
      assign1: number,
      assign2: number,
     }

     const gradeData: Record<Students, Grade> = {
      Sara: { assign1: 85, assign2: 93},
      Kelly: { assign1: 90, assign2: 59},
     }