import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceTableRow from "../../components/AttendanceTableRow/AttendanceTableRow";
import AddAttendanceForm from "../../components/AddAttendanceForm/AddAttendanceForm";
import { selectAttendances } from "../../store/student/selectors";
import { fetchAttendances } from "../../store/student/thunks";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function AttendancePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttendances);
  }, [dispatch]);

  const attendances = useSelector(selectAttendances);

  const renderAttendances = attendances;

  console.log(attendances);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="attendance-page">
      <div className="attendance-page-title">
        <h1>Attendance Overview</h1>
        <div>
          <button
            className="button button-primary add-attendance-button"
            onClick={() => setOpenForm(true)}
          >
            Add Attendance
          </button>
          <AddAttendanceForm open={openForm} close={() => setOpenForm(false)} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "1.6%" }}></th>
            <th style={{ width: "10%" }}>Student</th>
            <th style={{ width: "10%" }}>Teacher</th>
            <div className="students-page-table-column-name">
              <th>Class</th>
            </div>
            <th style={{ width: "10%" }}>Date</th>
            <th style={{ width: "10%" }}>Start</th>
            <th style={{ width: "10%" }}>End</th>
            <th style={{ width: "10%" }}>Hours</th>
            <th style={{ width: "10%" }}>Attendance</th>
            <th style={{ width: "10%" }}>Reason</th>
            <th style={{ width: "5%" }}></th>
          </tr>
        </thead>
        <tbody>
          {!attendances
            ? "Loading.."
            : renderAttendances.map((a) => (
                <AttendanceTableRow
                  key={a.id}
                  id={a.id}
                  firstName={a.student.firstName}
                  lastName={a.student.lastName}
                  teacher={`${a.student.groups[0].users[0].firstName} ${a.student.groups[0].users[0].lastName}`}
                  class={a.student.groups.map((group) => group.name)}
                  date={a.date}
                  timeStart={a.timeStart}
                  timeEnd={a.timeEnd}
                  totalHours={a.totalHours}
                  attendance={a.attended}
                  absenceReason={a.absenceReason}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}
