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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function StudentsPage() {
  const dispatch = useDispatch();
  const [statusFilter, setStatusFilter] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  const [openForm, setOpenForm] = useState(false);

  const students = useSelector(selectStudents);

  const groupNames = useSelector(selectGroupNames);

  const [sortBy, setSortBy] = useState("firstName");
  const [sortDirection, setSortDirection] = useState("ascending");

  const renderStudents = students
    .filter(
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
    )
    .sort(
      sortDirection === "ascending"
        ? (a, b) => a[`${sortBy}`].localeCompare(b[`${sortBy}`])
        : (b, a) => a[`${sortBy}`].localeCompare(b[`${sortBy}`])
    );

  useEffect(() => {
    dispatch(fetchStudents);
    dispatch(fetchGroupNames);
  }, [dispatch]);

  return (
    <div className="page">
      <div className="controls">
        <div className="students-search-input-and-button">
          <input
            className="search-field"
            value={searchInput}
            onChange={(e) =>
              setSearchInput(e.target.value.toLowerCase().trim())
            }
            placeholder="Search"
          />
          {searchInput && (
            <button
              className="students-page-search-clear-button"
              onClick={() => {
                setSearchInput("");
              }}
            >
              <ClearRoundedIcon sx={{ color: "#bdbdbd" }} />
            </button>
          )}
        </div>
        <div className="filters-add-student">
          <p className="filter">
            Sort:
            <select
              onChange={(e) => setSortBy(e.target.value)}
              className="student-filter"
            >
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
              <option value="dateOfBirth">Date of Birth</option>
              {/* <option value="groups][name">Group</option> */}
            </select>
          </p>
          {(groupFilter !== "all" || statusFilter !== "all") && (
            <button
              className="remove-filter-button"
              type="button"
              onClick={() => {
                setGroupFilter("all");
                setStatusFilter("all");
              }}
            >
              <ClearRoundedIcon sx={{ color: "#bdbdbd" }} />
            </button>
          )}
          <p className="filter">
            Group:
            <select
              value={groupFilter}
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
              value={statusFilter}
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
            className="button button-primary students-page-add-student-button"
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
            <th style={{ width: "10%" }}>Status</th>
            <div className="students-page-table-column-name">
              <th>Name</th>
            </div>
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
