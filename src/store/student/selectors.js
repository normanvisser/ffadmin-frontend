export const selectStudents = (reduxState) => {
  return reduxState.student.students;
};

export const selectSpecificStudent = (reduxState) => {
  return reduxState.student.studentDetails;
};

export const selectGroupNames = (reduxState) => {
  return reduxState.student.groups;
};
