import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AttendanceTableRow from "../../components/AttendanceTableRow/AttendanceTableRow";
import AddAttendanceForm from "../../components/AddAttendanceForm/AddAttendanceForm";
import { selectAttendances } from "../../store/student/selectors";
import { fetchAttendances } from "../../store/student/thunks";

export default function AttendancePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttendances);
  }, [dispatch]);

  const attendances = useSelector(selectAttendances);

  const renderAttendances = attendances;

  console.log(attendances);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="page">
      <div>
        <h1>Attendance Overview</h1>
      </div>
      <div>
        <button
          className="button button-primary"
          onClick={() => setOpenForm(true)}
        >
          Add Attendance
        </button>
        <AddAttendanceForm open={openForm} close={() => setOpenForm(false)} />
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "5%" }}></th>
            <th style={{ width: "10%" }}>Student</th>
            <div className="students-page-table-column-name">
              <th>Class</th>
            </div>
            <th style={{ width: "10%" }}>Teacher</th>
            <th style={{ width: "10%" }}>Date</th>
            <th style={{ width: "10%" }}>Start</th>
            <th style={{ width: "10%" }}>End</th>
            <th style={{ width: "10%" }}>Total Hours</th>
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
                  class={a.student.groups.map((group) => group.name)}
                  //   teacher={a.???}
                  timeStart={a.timeStart}
                  timeEnd={a.timeEnd}
                  totalHours={a.totalHours}
                  //   attendance={a.???}
                  reason={a.absenceReason}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}
