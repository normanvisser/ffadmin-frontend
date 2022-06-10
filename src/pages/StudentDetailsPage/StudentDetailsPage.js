import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificStudent } from "../../store/student/thunks";
import { selectSpecificStudent } from "../../store/student/selectors";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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
    <div className="page">
      <div className="top-bar">
        <button className="student-details_back-button">
          <ArrowBackIosRoundedIcon />
        </button>
      </div>
      {!studentDetails ? (
        "Loading"
      ) : (
        <div>
          <div className="image-personal-details">
            <img
              src={studentImage}
              alt={`${studentDetails.firstName} ${studentDetails.lastName}`}
              className="student-image"
            />
            <div className="personal-details">
              <div className="name-status-edit">
                <div className="name-and-status">
                  <h1>
                    {studentDetails.firstName} {studentDetails.lastName}
                  </h1>
                  <p className={"status-display " + studentDetails.status}>
                    {studentDetails.status}
                  </p>
                </div>

                <button className="student-details_edit-button button-secondary">
                  Edit
                </button>
              </div>
              <div className="student-details_personal-details">
                <div className="student-details_personal-details-description">
                  <p>Initials:</p>
                  <p>Date of Birth:</p>
                  <p>Gender:</p>
                  <p>BSN:</p>
                </div>
                <div className="student-details_personal-details-input">
                  <p>{studentDetails.initials}</p>
                  <p>{studentDetails.dateOfBirth}</p>
                  <p>{studentDetails.gender}</p>
                  <p>{studentDetails.bsn}</p>
                </div>
              </div>
            </div>
          </div>
          <Divider variant="middle" />
          <div className="title-and-attendance-details">
            <div>
              <h4>Attendance</h4>
            </div>
            <div>
              <p>
                Group:{" "}
                {studentDetails.groups.map((group) => (
                  <>
                    {group.name} ({group.level})
                  </>
                ))}
              </p>
            </div>
            <div className="attendance-details">
              <div className="attendance">
                <h3>Total</h3>
                <div className="total-attendance">
                  <p className="total-attendance-number">15</p>
                  <p>lessons</p>
                </div>
                <div className="total-attendance">
                  <p className="total-attendance-number">60</p>
                  <p>hours</p>
                </div>
              </div>
              <div className="attendance">
                <h3>Attended</h3>
                <div className="total-attendance">
                  <p className="total-attendance-number">15</p>
                  <p>lessons</p>
                </div>
                <div className="total-attendance">
                  <p className="total-attendance-number">60</p>
                  <p>hours</p>
                </div>
              </div>
              <div className="attendance">
                <h3>Cancelled</h3>
                <div className="total-attendance">
                  <p className="total-attendance-number">15</p>
                  <p>lessons</p>
                </div>
                <div className="total-attendance">
                  <p className="total-attendance-number">60</p>
                  <p>hours</p>
                </div>
              </div>
              <div className="attendance">
                <h3>No Show</h3>
                <div className="total-attendance">
                  <p className="total-attendance-number">15</p>
                  <p>lessons</p>
                </div>
                <div className="total-attendance">
                  <p className="total-attendance-number">60</p>
                  <p>hours</p>
                </div>
              </div>
            </div>

            <div>
              <button className="button-text-only">See Details</button>
            </div>
          </div>
          <Divider variant="middle" />
          <div>
            <h4>Student Information</h4>
            <div className="student-details_student-school-information">
              <div className="student-details_student-school-info-description">
                <p>Reference nr:</p>
                <p>Contract Signed:</p>

                <p>WEB-code:</p>
                <p>Extension of contract:</p>
              </div>
              <div>
                <p>
                  {studentDetails.ref}
                  <ContentCopyIcon sx={{ fontSize: 14, paddingLeft: 1 }} />
                </p>
                <p>
                  {studentDetails.webCode}{" "}
                  <ContentCopyIcon sx={{ fontSize: 14, paddingLeft: 0.5 }} />
                </p>
                <p>{studentDetails.contractSigned ? "Yes" : "No"}</p>
                <p>{studentDetails.extension ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      )}
    </div>
  );
}
