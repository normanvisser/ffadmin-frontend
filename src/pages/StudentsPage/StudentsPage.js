import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentTableRow from "../../components/StudentTableRow/StudentTableRow";
import {
  selectGroupNames,
  selectStudents,
} from "../../store/student/selectors";
import { fetchGroupNames, fetchStudents } from "../../store/student/thunks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./styles.css";
import FilterGroupName from "../../components/FilterGroupName/FilterGroupName";
import AddStudentForm from "../../components/AddStudentForm/AddStudentForm";

export default function StudentsPage() {
  const dispatch = useDispatch();
  const [statusFilter, setStatusFilter] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  const [openForm, setOpenForm] = useState(false);

  const students = useSelector(selectStudents);

  const groupNames = useSelector(selectGroupNames);

  const renderStudents = students.filter(
    (student) =>
      (student.groups.map((group) => group.name).includes(groupFilter) ||
        groupFilter === "all") &&
      (student.status === statusFilter || statusFilter === "all") &&
      ((student.firstName + " " + student.lastName)
        .toLowerCase()
        .includes(searchInput) ||
        student.dateOfBirth.includes(searchInput) ||
        student.groups
          .map((group) => group.name.toLowerCase())
          .includes(searchInput) ||
        student.ref.toLowerCase().includes(searchInput) ||
        student.bsn.includes(searchInput))
  );

  useEffect(() => {
    dispatch(fetchStudents);
    dispatch(fetchGroupNames);
  }, [dispatch]);

  return (
    <div className="page">
      <div className="controls">
        <input
          className="search-field"
          onChange={(e) => setSearchInput(e.target.value.toLowerCase().trim())}
        />
        <div className="filters-button">
          <button type="button" onClick={() => setGroupFilter("all")}>
            Remove Filters
          </button>
          <p className="filter">
            <b className="font-weight-600">Group: All</b>
            <select onChange={(e) => setGroupFilter(e.target.value)}>
              <option value={"all"}>All</option>
              {groupNames.map((name) => (
                <FilterGroupName key={name.id} name={name.name} />
              ))}
            </select>
            <ExpandMoreIcon
              sx={{ color: "#99a0ab" }}
              fontSize="small"
              className="filter-dropdown"
            />
          </p>
          <p className="filter" style={{ fontWeight: 600 }}>
            Status: All
            <select onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="Active">Active</option>
              <option value="On-Hold">On-Hold</option>
              <option value="Finished">Finished</option>
              <option value="Stopped">Stopped</option>
            </select>
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
            onClick={() => setOpenForm(true)}
          >
            Add Student
          </Button>
          <AddStudentForm
            open={openForm}
            close={() => {
              setOpenForm(false);
            }}
          />
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
            : renderStudents.map((student) => (
                <StudentTableRow
                  key={student.id}
                  id={student.id}
                  firstName={student.firstName}
                  affix={student.affix}
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
