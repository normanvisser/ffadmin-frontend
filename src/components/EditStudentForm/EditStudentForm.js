import { Divider } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createNewStudent,
  removeStudent,
  editStudent,
} from "../../store/student/thunks";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function EditStudentForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(props.firstName);
  const [initials, setInitials] = useState(props.initials);
  const [lastName, setLastName] = useState(props.lastName);
  const [gender, setGender] = useState(props.gender);
  const [dateOfBirth, setDateOfBirth] = useState(props.dateOfBirth);
  const [bsn, setBsn] = useState(props.bsn);
  const [ref, setRef] = useState(props.refe);
  const [startingDate, setStartingDate] = useState(props.startingDate);
  const [contractSigned, setContractSigned] = useState(props.contractSigned);
  const [webCode, setWebCode] = useState(props.webCode);
  const [extension, setExtension] = useState(props.extension);
  const [status, setStatus] = useState(props.status);
  const [groupId, setGroupId] = useState(props.class);
  const [imageUrl, setImageUrl] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      editStudent(
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
        status,
        props.id
        // imageUrl
      )
    );
    props.close();
  };

  const deleteStudent = (e) => {
    e.preventDefault();
    dispatch(removeStudent(props.id));
    navigate("/students");
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      props.close();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "dfkzgxwj");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dnkcpkcw3/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImageUrl(file.url); //put the url in local state, next step you can send it to the backend
  };
  console.log(imageUrl);

  console.log("group names", props.groupNames);

  if (!props.open) return null;

  return (
    <>
      <div className="overlay" onClick={props.close} />
      <form className="add-student-form">
        <div className="display-flex-space-between">
          <h1>Add New Student</h1>
          <CloseRoundedIcon
            sx={{ color: "var(--color-grey-6)" }}
            className="vertical-margin-auto cursor-pointer"
            onClick={props.close}
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
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={gender === "male"}
              />
              <label for="female" className="font-weight-500">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={gender === "female"}
              />
              <label for="other" className="font-weight-500">
                Other
              </label>
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={gender === "other"}
              />
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
              {props.groupNames.map((e) => (
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
          </div>
          <div className="display-flex-column width-45">
            <label for="img">Select image:</label>

            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="vertical-margin-auto"
              onChange={uploadImage}
              // value={imageUrl}
            />
          </div>
        </div>
        <Divider sx={{ marginTop: 2.5 }} />
        <div className="submit-cancel-delete-buttons">
          <button
            // type="button"
            className="button button-delete"
            onClick={deleteStudent}
          >
            Delete
          </button>
          <div>
            <button
              style={{ marginRight: "10px" }}
              className="button button-secondary"
              onClick={props.close}
            >
              Cancel
            </button>
            <button className="button button-primary" onClick={submitForm}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
