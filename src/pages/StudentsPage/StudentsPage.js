import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentTableRow from "../../components/StudentTableRow/StudentTableRow";
import { selectStudents } from "../../store/student/selectors";
import { fetchStudents } from "../../store/student/thunks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./styles.css";

export default function StudentsPage() {
  const dispatch = useDispatch();

  const students = useSelector(selectStudents);
  console.log(students);

  useEffect(() => {
    dispatch(fetchStudents);
  }, [dispatch]);

  return (
    <div className="page">
      <div className="controls">
        <input className="search-field" autofocus="autofocus" />
        <div className="filters-button">
          <p className="filter">
            Group: All
            <ExpandMoreIcon
              sx={{ color: "#99a0ab" }}
              fontSize="small"
              className="filter-dropdown"
            />
          </p>
          <p className="filter">
            Status: All
            <ExpandMoreIcon
              sx={{ color: "#99a0ab" }}
              fontSize="small"
              className="filter-dropdown"
            />
          </p>
          <Button
            className="add-student-button"
            size="small"
            variant="contained"
            disableElevation
            startIcon={<AddCircleOutlineIcon />}
          >
            Add Student
          </Button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "8%" }}>Status</th>
            <th>Name</th>
            <th style={{ width: "13%" }}>Gender</th>
            <th style={{ width: "15%" }}>Date of Birth</th>
            <th style={{ width: "12%" }}>Group</th>
            <th style={{ width: "15%" }}>Ref nr</th>
            <th style={{ width: "6%" }}>BSN</th>
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
                  group={student.groups.map((group) => group.name)}
                  refNr={student.ref}
                  bsn={student.bsn}
                  status={student.status}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}
