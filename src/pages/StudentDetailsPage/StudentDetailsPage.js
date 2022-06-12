import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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

  const totalHours = studentDetails?.studentAttendances
    .map((e) => e.totalHours)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  const totalLessons = studentDetails?.studentAttendances.map(
    (e) => e.totalHours
  ).length;

  console.log(totalHours, totalLessons);

  const attended = studentDetails?.studentAttendances.filter((e) => e.attended);
  const totalAttendedHours = attended
    ?.map((e) => e.totalHours)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  const totalAttendedLessons = attended?.length;

  console.log("attended", attended);
  console.log("attendedHours", totalAttendedHours);
  console.log("attendedLessons", totalAttendedLessons);

  const cancelled = studentDetails?.studentAttendances.filter(
    (e) => e.authorizedAbsence
  );
  const totalCancelledHours = cancelled
    ?.map((e) => e.totalHours)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  const totalCancelledLessons = cancelled?.length;

  console.log(totalCancelledHours, totalCancelledLessons);

  const noShow = studentDetails?.studentAttendances.filter(
    (e) => e.authorizedAbsence === false
  );
  const totalNoShowHours = noShow
    ?.map((e) => e.totalHours)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  const totalNoShowLessons = noShow?.length;

  console.log(totalNoShowHours, totalNoShowLessons);

  const navigate = useNavigate();

  return (
    <div className="studentDetailsPage">
      <div className="top-bar">
        <button
          className="student-details_back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
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

                <button className="student-details_edit-button button-small button-no-fill-primary">
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
          <div className="title-and-attendance-details">
            <div>
              <h4>Attendance</h4>
            </div>
            <div className="attendance-details">
              <div className="attendance">
                <div className="attendance-title-and-percentage">
                  <h3>Total</h3>
                </div>
                <div className="attendance-lessons-hours">
                  <div className="total-attendance">
                    <p className="total-attendance-number">{totalLessons}</p>
                    <p className="total-attendance-number">{totalHours}</p>
                  </div>
                  <div className="total-attendance">
                    <p>lessons</p>
                    <p>hours</p>
                  </div>
                </div>
              </div>
              <div className="attendance">
                <div className="attendance-title-and-percentage">
                  <h3>Attended</h3>
                  <p className="attendance-percentage attended">
                    {Math.round((totalAttendedLessons / totalLessons) * 100)}%
                  </p>
                </div>
                <div className="attendance-lessons-hours">
                  <div className="total-attendance">
                    <p className="total-attendance-number">
                      {totalAttendedLessons}
                    </p>
                    <p className="total-attendance-number">
                      {totalAttendedHours}
                    </p>
                  </div>
                  <div className="total-attendance">
                    <p>lessons</p>
                    <p>hours</p>
                  </div>
                </div>
              </div>
              <div className="attendance">
                <div className="attendance-title-and-percentage">
                  <h3>Cancelled</h3>
                  <p className="attendance-percentage cancelled">
                    {Math.round((totalCancelledLessons / totalLessons) * 100)}%
                  </p>
                </div>
                <div className="attendance-lessons-hours">
                  <div className="total-attendance">
                    <p className="total-attendance-number">
                      {totalCancelledLessons}
                    </p>
                    <p className="total-attendance-number">
                      {totalCancelledHours}
                    </p>
                  </div>
                  <div className="total-attendance">
                    <p>lessons</p>
                    <p>hours</p>
                  </div>
                </div>
              </div>
              <div className="attendance">
                <div className="attendance-title-and-percentage">
                  <h3>No Show</h3>
                  <p className="attendance-percentage noshow">
                    {Math.round((totalNoShowLessons / totalLessons) * 100)}%
                  </p>
                </div>
                <div className="attendance-lessons-hours">
                  <div className="total-attendance">
                    <p className="total-attendance-number">
                      {totalNoShowLessons}
                    </p>
                    <p className="total-attendance-number">
                      {totalNoShowHours}
                    </p>
                  </div>
                  <div className="total-attendance">
                    <p>lessons</p>
                    <p>hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="button-text-only">See Details</button>
            </div>
          </div>
          <Divider />
          <div>
            <h4>Student Information</h4>
            <div className="student-details_student-school-information">
              <div className="student-details_student-school-info-description">
                <p>Current class:</p>
                <p>Current level:</p>
                <p>Reference nr:</p>
                <p>WEB-code:</p>
                <p>Contract Signed:</p>
                <p>Extension of contract:</p>
              </div>
              <div>
                <p>
                  {studentDetails.groups.map((group) => (
                    <>
                      {group.name} ({group.level})
                    </>
                  ))}
                </p>
                <p>{studentDetails.groups.map((group) => group.level)}</p>

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
