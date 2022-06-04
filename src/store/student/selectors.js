export const selectStudents = (reduxState) => {
  return reduxState.student.students;
};

export const selectSpecificStudent = (reduxState) => {
  return reduxState.student.studentDetails;
};
