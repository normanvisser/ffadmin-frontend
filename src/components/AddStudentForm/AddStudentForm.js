import { Button } from "@mui/material";
import { useState } from "react";
import "./styles.css";

export default function AddStudentForm({ open, children }) {
  const [firstName, setFirstName] = useState("");
  const [initials, setInitials] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bsn, setBsn] = useState("");
  const [ref, setRef] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [contractSigned, setContractSigned] = useState("");
  const [webCode, setWebCode] = useState("");
  const [extension, setExtension] = useState("");
  const [status, setStatus] = useState("");

  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <form className="add-student-form">
        <h1>Create New Student</h1>
        <div className="display-flex-space-between">
          <div className="display-flex-column">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="display-flex-column">
            <label for="initials">Initials</label>
            <input
              type="text"
              id="initials"
              name="initials"
              value={initials}
              onChange={(e) => setInitials(e.target.value)}
            />
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="display-flex-column">
            <label for="gender">Gender</label>
            <select onChange={(e) => setDateOfBirth(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {/* <input
              type="text"
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            /> */}
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column">
            <label for="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="display-flex-column">
            <label for="bsn">BSN</label>
            <input
              type="number"
              id="bsn"
              name="bsn"
              value={bsn}
              onChange={(e) => setBsn(e.target.value)}
            />
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column">
            <label for="ref">Reference Number</label>
            <input
              type="text"
              id="ref"
              name="ref"
              value={ref}
              onChange={(e) => setRef(e.target.value)}
            />
          </div>
          <div className="display-flex-column">
            <label for="startingDate">Starting Date</label>
            <input
              type="date"
              id="startingDate"
              name="startingDate"
              value={startingDate}
              onChange={(e) => setStartingDate(e.target.value)}
            />
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column">
            <label for="contractSigned">Contract Signed</label>
            <select onChange={(e) => setContractSigned(e.target.value)}>
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
          <div className="display-flex-column">
            <label for="webCode">WEB code</label>
            <input
              type="text"
              id="webCode"
              name="webCode"
              value={webCode}
              onChange={(e) => setWebCode(e.target.value)}
            />
          </div>
        </div>

        <div className="display-flex-space-between">
          <div className="display-flex-column">
            <label for="extension">Extension</label>
            <select onChange={(e) => setExtension(e.target.value)}>
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
          <div className="display-flex-column">
            <label for="status">Status</label>
            <select onChange={(e) => setContractSigned(e.target.value)}>
              <option value="Active">Active</option>
              <option value="On-Hold">On-Hold</option>
              <option value="Finished">Finished</option>
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
        </div>
        <div className="submit-cancel-buttons">
          <Button
            className="submit-button"
            size="medium"
            variant="contained"
            disableElevation
            // startIcon={<AddCircleOutlineIcon />}
            // onClick={() => setOpenForm(true)}
          >
            Submit
          </Button>
          <Button
            className="cancel-button"
            size="medium"
            variant="outlined"
            disableElevation
            // startIcon={<AddCircleOutlineIcon />}
            // onClick={() => setOpenForm(true)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
}
