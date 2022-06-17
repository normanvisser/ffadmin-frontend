import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAttendance } from "../../store/student/slice";

export default function AddAttendanceForm({ open, close }) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [attended, setAttended] = useState("");
  const [authorizedAbsence, setAuthorizedAbsence] = useState("");
  const [absenceReason, setAbsenceReason] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      addAttendance(
        firstName,
        lastName,
        date,
        startTime,
        endTime,
        totalHours,
        attended,
        authorizedAbsence,
        absenceReason
      )
    );
  };

  if (!open) return null;

  return (
    <>
      <div className="overla" onClick={close} />

      <form className="add-attendance-form" onSubmit={submitForm}>
        <h1>Add Attendance</h1>
        <div>
          <label>First Name</label>
          <input
            type="text"
            className="form-input"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            className="form-input"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            className="form-input"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Start Time</label>
          <input
            type="time"
            className="form-input"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label>End Time</label>
          <input
            type="time"
            className="form-input"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div>
          <label>Total Hours</label>
          <input
            type="text"
            className="form-input"
            onChange={(e) => setTotalHours(e.target.value)}
          />
        </div>
        <div>
          <label>Attended</label>
          <input
            type="checkbox"
            className="form-input"
            onChange={(e) => setAttended(e.target.value)}
          />
        </div>
        <div>
          <label>Authorized Absence</label>
          <input
            type="checkbox"
            className="form-input"
            onChange={(e) => setAuthorizedAbsence(e.target.value)}
          />
        </div>
        <div>
          <label>Absence Reason</label>
          <input
            type="text"
            className="form-input"
            onChange={(e) => setAbsenceReason(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
