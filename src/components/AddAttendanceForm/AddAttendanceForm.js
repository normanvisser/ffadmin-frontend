export default function addAttendanceForm({ open, close }) {
  if (!open) return null;

  return (
    <>
      <div className="overlay" onClick={close} />

      <form className="add-attendance-form">
        <div>
          <h1>Add Attendance</h1>
          <div>
            <label>Name</label>
            <input type="text" className="form-input" />
          </div>
        </div>
      </form>
    </>
  );
}
