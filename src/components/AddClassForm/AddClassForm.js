import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/student/selectors";
import { createGroup, fetchUsers } from "../../store/student/thunks";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./styles.css";
import { Divider } from "@mui/material";

export default function AddClassForm({ open, close }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [level, setLevel] = useState("A2");
  const [hours, setHours] = useState("");
  const [startDate, setStartDate] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [coTeacherId, setCoTeacherId] = useState("");

  console.log(name, level, hours, startDate, teacherId, coTeacherId);

  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      close();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  const users = useSelector(selectUsers);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      createGroup(name, level, hours, startDate, teacherId, coTeacherId)
    );
  };

  if (!open) return null;
  return (
    <>
      <div className="overlay" onClick={close} />
      <form className="add-class-form">
        <div className="display-flex-space-between">
          <h1>Add Class</h1>
          <CloseRoundedIcon
            sx={{ color: "var(--color-grey-6)" }}
            className="vertical-margin-auto cursor-pointer"
            onClick={close}
          />
        </div>
        <Divider />

        <div className="form-inputs">
          <div className="display-flex-space-between">
            <div className="display-flex-column width-45">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="display-flex-column width-45">
              <label>Level</label>
              <select
                onChange={(e) => setLevel(e.target.value)}
                className="form-input"
              >
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
            </div>
          </div>
          <div className="display-flex-space-between">
            <div className="display-flex-column width-45">
              <label>Start Date</label>
              <input
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="display-flex-column width-45">
              <label>Hours</label>
              <input
                type="number"
                onChange={(e) => setHours(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <div className="display-flex-space-between">
            <div className="display-flex-column width-45">
              <label>Teacher</label>
              <select
                onChange={(e) => setTeacherId(e.target.value)}
                className="form-input"
              >
                <option disabled selected value>
                  -- select teacher --
                </option>
                {users.map((e) => (
                  <option value={e.id}>
                    {e.firstName} {e.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="display-flex-column width-45">
              <label>Co-Teacher</label>
              <select
                onChange={(e) => setCoTeacherId(e.target.value)}
                className="form-input"
              >
                <option value={null}>None</option>
                {users.map((e) => (
                  <option value={e.id}>
                    {e.firstName} {e.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <Divider />
        <div className="submit-cancel-buttons">
          <button onClick={close} className="button button-secondary">
            Cancel
          </button>
          <button
            type="submit"
            onClick={submitForm}
            className="button button-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
