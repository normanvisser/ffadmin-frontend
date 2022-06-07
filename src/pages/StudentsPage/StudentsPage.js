import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentTableRow from "../../components/StudentTableRow/StudentTableRow";
import {
  selectGroupNames,
  selectStudents,
} from "../../store/student/selectors";
import { fetchGroupNames, fetchStudents } from "../../store/student/thunks";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchIcon from "@mui/icons-material/SearchRounded";
import "./styles.css";
import FilterGroupName from "../../components/FilterGroupName/FilterGroupName";
import AddStudentForm from "../../components/AddStudentForm/AddStudentForm";
import "../../config/constants.css";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";

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
      student.groups.map((group) => group.name).includes(groupFilter) ||
      (groupFilter === "all" &&
        (student.status === statusFilter || statusFilter === "all") &&
        ((student.firstName + " " + student.lastName)
          .toLowerCase()
          .includes(searchInput) ||
          student.dateOfBirth.includes(searchInput) ||
          student.groups
            .map((group) => group.name.toLowerCase())
            .includes(searchInput) ||
          student.ref.toLowerCase().includes(searchInput) ||
          student.bsn.includes(searchInput)))
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase().trim())}
        />
        <button
          onClick={() => {
            setSearchInput("");
          }}
        >
          <ClearRoundedIcon />
        </button>
        <div className="filters-add-student">
          {(groupFilter !== "all" || statusFilter !== "all") && (
            <button
              className="remove-filter-button"
              type="button"
              onClick={() => {
                setGroupFilter("all");
              }}
            >
              Remove Filters
            </button>
          )}
          <p className="filter">
            Group:
            <select
              className="student-filter"
              onChange={(e) => setGroupFilter(e.target.value)}
            >
              <option value={"all"}>All</option>
              {groupNames.map((name) => (
                <FilterGroupName key={name.id} name={name.name} />
              ))}
            </select>
          </p>
          <p className="filter">
            Status:
            <select
              id="student-filter"
              className="student-filter"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Active">Active</option>
              <option value="On-Hold">On-Hold</option>
              <option value="Finished">Finished</option>
              <option value="Stopped">Stopped</option>
            </select>
          </p>
          <button
            className="button button-primary"
            onClick={() => setOpenForm(true)}
          >
            {/* <AddCircleOutlineIcon />  */}
            Add Student
          </button>
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
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <ClearRoundedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
