import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificStudent } from "../../store/student/thunks";
import { selectSpecificStudent } from "../../store/student/selectors";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Divider from "@mui/material/Divider";
import "./styles.css";
import studentImage from "./jim-carrey.jpg";

export default function StudentDetailsPage() {
  const dispatch = useDispatch();
  const studentId = useParams().id;

  useEffect(() => {
    dispatch(fetchSpecificStudent(studentId));
  }, []);

  const studentDetails = useSelector(selectSpecificStudent);
  console.log(studentDetails);

  return (
    <div>
      <div className="top-bar">
        <button>
          <ArrowBackRoundedIcon /> Students
        </button>
      </div>
      {!studentDetails ? (
        "Loading"
      ) : (
        <div className="page">
          <div className="image-personal-details">
            <img
              src={studentImage}
              alt={`${studentDetails.firstName} ${studentDetails.lastName}`}
              className="student-image"
            />
            <div className="width-49 personal-details">
              <h1>
                {studentDetails.firstName} {studentDetails.lastName}
              </h1>
              <div>
                <p className="status-display">{studentDetails.status}</p>
              </div>
              <p>Initials: {studentDetails.initials}</p>
              <p>Date of Birth: {studentDetails.dateOfBirth}</p>
              <p>Gender: {studentDetails.gender}</p>
              <p>BSN: {studentDetails.bsn}</p>
            </div>
          </div>
          <Divider variant="middle" />
          <div className="school-details">
            <div className="ref-and-contract">
              <p className="width-49">Reference nr: {studentDetails.ref}</p>
              <p className="width-49">
                Contract Signed: {studentDetails.contractSigned ? "Yes" : "No"}
              </p>
            </div>
            <div className="web-and-extension">
              <p className="width-49">WEB-code: {studentDetails.webCode}</p>
              <p className="width-49">
                Extension of contract: {studentDetails.extension ? "Yes" : "No"}
              </p>
            </div>
            <div>
              {studentDetails.groups.map((group) => (
                <p>
                  Group: {group.name} ({group.level})
                </p>
              ))}
            </div>
          </div>
          <Divider variant="middle" />
          <div>
            <p>Total (hours / lessons)</p>
            <p>Total present (hours / lessons)</p>
            <p>Total authorized absent (hours / lessons)</p>
            <p>Total unauthorized absent (hours / lessons)</p>

            {studentDetails.studentAttendances.map((e) => (
              <div>
                {e.date}
                {e.timeStart}
                {e.timeEnd}
                {e.attended}
                {e.authorizedAbsence}
                {e.absenceReason}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
