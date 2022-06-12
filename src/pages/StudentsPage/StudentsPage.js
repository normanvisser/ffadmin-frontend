import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentTableRow from "../../components/StudentTableRow/StudentTableRow";
import {
  selectGroupNames,
  selectStudents,
} from "../../store/student/selectors";
import { fetchGroupNames, fetchStudents } from "../../store/student/thunks";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import "./styles.css";
import FilterGroupName from "../../components/FilterGroupName/FilterGroupName";
import AddStudentForm from "../../components/AddStudentForm/AddStudentForm";
import "../../config/constants.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  filterByGroup,
  filterBySearch,
  filterByStatus,
} from "../../utils/filters";

export default function StudentsPage() {
  const dispatch = useDispatch();
  const [statusFilter, setStatusFilter] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  const [openForm, setOpenForm] = useState(false);

  const students = useSelector(selectStudents);

  const groupNames = useSelector(selectGroupNames);

  console.log(groupNames);

  const [sortBy, setSortBy] = useState("firstName");
  const [sortDirection, setSortDirection] = useState("ascending");

  const renderStudents = students
    .filter(
      (student) =>
        filterByGroup(student, groupFilter) &&
        filterByStatus(student, statusFilter) &&
        filterBySearch(student, searchInput)
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
      <div>
        <h1 className="page-title">Student Overview</h1>
      </div>
      <div className="controls">
        <div className="students-search-input-and-button">
          <SearchRoundedIcon
            sx={{ color: "#bdbdbd", fontSize: 22 }}
            className="students-page-search-input-icon"
          />

          <input
            className="search-field"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
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
          {(groupFilter !== "all" || statusFilter !== "all") && (
            <button
              className="remove-filter-button"
              type="button"
              onClick={() => {
                setGroupFilter("all");
                setStatusFilter("all");
              }}
            >
              <p>Clear filters</p>
              {/* <ClearRoundedIcon sx={{ color: "#bdbdbd" }} /> */}
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
              <option value="Finished">Completed</option>
              <option value="Stopped">Stopped</option>
            </select>
          </p>
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
          <button
            className="button button-primary students-page-add-student-button"
            onClick={() => setOpenForm(true)}
          >
            Add Student
          </button>
          <AddStudentForm
            open={openForm}
            groupNames={groupNames}
            close={() => {
              setOpenForm(false);
            }}
          />
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ width: "4%" }}></th>
              <th style={{ width: "14%" }}>Status</th>

              <th>Name</th>

              <th style={{ width: "13%" }}>Gender</th>
              <th style={{ width: "15%" }}>Date of Birth</th>
              <th style={{ width: "12%" }}>Group</th>
              <th style={{ width: "15%" }}>Ref nr</th>
              <th style={{ width: "6%" }}>BSN</th>
              <th style={{ width: "4%" }}></th>
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
    </div>
  );
}
