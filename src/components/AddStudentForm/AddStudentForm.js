import { Divider } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewStudent } from "../../store/student/thunks";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./styles.css";

export default function AddStudentForm({ groupNames, open, close }) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [initials, setInitials] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bsn, setBsn] = useState("");
  const [ref, setRef] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [contractSigned, setContractSigned] = useState(true);
  const [webCode, setWebCode] = useState("");
  const [extension, setExtension] = useState(false);
  const [status, setStatus] = useState("Active");
  const [groupId, setGroupId] = useState("");
  const [image, setImage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      createNewStudent(
        firstName,
        initials,
        lastName,
        gender,
        dateOfBirth,
        startingDate,
        bsn,
        groupId,
        contractSigned,
        extension,
        webCode,
        ref,
        status
      )
    );
  };

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

  if (!open) return null;

  return (
    <>
      <div className="overlay" onClick={close} />
      <form className="add-student-form">
        <div className="display-flex-space-between">
          <h1>Add New Student</h1>
          <CloseRoundedIcon
            sx={{ color: "var(--color-grey-6)" }}
            className="vertical-margin-auto cursor-pointer"
            onClick={close}
          />
        </div>
        <Divider sx={{ marginBottom: 2.5 }} />
        <div className="display-flex-space-between">
          <div className="display-flex-column width-45">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="display-flex-column width-45">
            <label for="initials">Initials</label>
            <input
              type="text"
              id="initials"
              name="initials"
              value={initials}
              onChange={(e) => setInitials(e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column width-45">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="display-flex-column width-45">
            <label>Gender</label>
            <div
              className="display-flex-space-between vertical-margin-auto"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <label for="male" className="font-weight-500">
                Male
              </label>
              <input type="radio" name="gender" id="male" value="male" />
              <label for="female" className="font-weight-500">
                Female
              </label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="other" className="font-weight-500">
                Other
              </label>
              <input type="radio" name="gender" id="other" value="other" />
            </div>
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column width-45">
            <label for="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="display-flex-column width-45">
            <label for="bsn">BSN</label>
            <input
              type="number"
              id="bsn"
              name="bsn"
              value={bsn}
              onChange={(e) => setBsn(e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column width-45">
            <label for="startingDate">Starting Date</label>
            <input
              type="date"
              id="startingDate"
              name="startingDate"
              value={startingDate}
              onChange={(e) => setStartingDate(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="display-flex-column width-45">
            <label>Class</label>
            <select
              onChange={(e) => setGroupId(e.target.value)}
              className="form-input"
              value={groupId}
            >
              {groupNames.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column width-45">
            <label for="contractSigned">Contract Signed</label>
            <select
              onChange={(e) => setContractSigned(e.target.value)}
              className="form-input"
              value={contractSigned}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {/* <input
              type="text"
              id="contractSigned"
              name="contractSigned"
              value={contractSigned}
              onChange={(e) => setContractSigned(e.target.value)}
            /> */}
          </div>
          <div className="display-flex-column width-45">
            <label for="extension">Extension</label>
            <select
              onChange={(e) => setExtension(e.target.value)}
              className="form-input"
              value={extension}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {/* <input
              type="text"
              id="extension"
              name="extension"
              value={extension}
              onChange={(e) => setExtension(e.target.value)}
            /> */}
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column width-45">
            <label for="webCode">WEB code</label>
            <input
              type="text"
              id="webCode"
              name="webCode"
              value={webCode}
              onChange={(e) => setWebCode(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="display-flex-column width-45">
            <label for="ref">Reference Number</label>
            <input
              type="text"
              id="ref"
              name="ref"
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              className="form-input"
            />
          </div>
        </div>
        <div className="display-flex-space-between">
          <div className="display-flex-column width-45">
            <label for="status">Status</label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="form-input"
              value={status}
            >
              <option value="Active">Active</option>
              <option value="On-Hold">On-Hold</option>
              <option value="Completed">Completed</option>
              <option value="Stopped">Stopped</option>
            </select>
            {/* <input
              type="text"
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            /> */}
          </div>
          <div className="display-flex-column width-45">
            <label for="img">Select image:</label>

            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="vertical-margin-auto"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>
        </div>
        <Divider sx={{ marginTop: 2.5 }} />
        <div className="submit-cancel-buttons">
          <button className="button button-secondary" onClick={close}>
            Cancel
          </button>
          <button className="button button-primary" onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
