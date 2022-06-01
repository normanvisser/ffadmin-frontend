import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentTableRow from "../../components/StudentTableRow";
import { selectStudents } from "../../store/student/selectors";
import { fetchStudents } from "../../store/student/thunks";
import "./styles.css";

export default function StudentsPage() {
  const dispatch = useDispatch();

  const students = useSelector(selectStudents);
  console.log(students);

  useEffect(() => {
    dispatch(fetchStudents);
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Ref nr</th>
          </tr>
        </thead>
        <tbody>
          {!students
            ? "Loading.."
            : students.map((student) => (
                <StudentTableRow
                  key={student.id}
                  id={student.id}
                  firstName={student.firstName}
                  lastName={student.lastName}
                  gender={student.gender}
                  dateOfBirth={student.dateOfBirth}
                  refNr={student.ref}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}
