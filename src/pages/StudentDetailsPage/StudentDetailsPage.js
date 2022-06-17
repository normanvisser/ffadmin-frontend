import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchGroupNames,
  fetchSpecificStudent,
} from "../../store/student/thunks";
import {
  selectGroupNames,
  selectSpecificStudent,
} from "../../store/student/selectors";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Divider from "@mui/material/Divider";
import "./styles.css";
import EditStudentForm from "../../components/EditStudentForm/EditStudentForm";

export default function StudentDetailsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groupNames = useSelector(selectGroupNames);

  const studentId = useParams().id;

  console.log("student id", studentId);

  useEffect(() => {
    dispatch(fetchSpecificStudent(studentId));
    dispatch(fetchGroupNames);
  }, []);

  const studentDetails = useSelector(selectSpecificStudent);

  const attendance = studentDetails?.studentAttendances;

  console.log("fetched student", studentDetails);

  const totalHours =
    attendance?.length > 0 &&
    attendance
      .map((e) => e.totalHours)
      .reduce((previousValue, currentValue) => previousValue + currentValue);

  const totalLessons = studentDetails?.studentAttendances.map(
    (e) => e.totalHours
  ).length;

  console.log(totalHours, totalLessons);

  const attended = studentDetails?.studentAttendances.filter((e) => e.attended);

  const totalAttendedHours =
    attended?.length > 0 &&
    attended
      .map((e) => e.totalHours)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  const totalAttendedLessons = attended?.length;

  console.log("attended", attended);
  console.log("attendedHours", totalAttendedHours);
  console.log("attendedLessons", totalAttendedLessons);

  const cancelled = studentDetails?.studentAttendances.filter(
    (e) => e.authorizedAbsence
  );

  const totalCancelledHours =
    cancelled?.length > 0 &&
    cancelled
      ?.map((e) => e.totalHours)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  const totalCancelledLessons = cancelled?.length;

  console.log(totalCancelledHours, totalCancelledLessons);

  const noShow = studentDetails?.studentAttendances.filter(
    (e) => e.authorizedAbsence === false
  );

  const totalNoShowHours =
    noShow?.length > 0 &&
    noShow
      ?.map((e) => e.totalHours)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  const totalNoShowLessons = noShow?.length;

  console.log(totalNoShowHours, totalNoShowLessons);

  const [openForm, setOpenForm] = useState(false);

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
              src={studentDetails.imageUrl}
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

                <button
                  style={{ cursor: "pointer" }}
                  className="student-details_edit-button button-small button-no-fill-primary"
                  onClick={() => setOpenForm(true)}
                >
                  Edit
                </button>
                <EditStudentForm
                  open={openForm}
                  groupNames={groupNames}
                  close={() => {
                    setOpenForm(false);
                  }}
                  id={studentDetails.id}
                  firstName={studentDetails.firstName}
                  lastName={studentDetails.lastName}
                  initials={studentDetails.initials}
                  gender={studentDetails.gender}
                  dateOfBirth={studentDetails.dateOfBirth}
                  bsn={studentDetails.bsn}
                  refe={studentDetails.ref}
                  startingDate={studentDetails.startingDate}
                  class={studentDetails.groups[0].id}
                  contractSigned={studentDetails.contractSigned}
                  extension={studentDetails.extension}
                  webCode={studentDetails.webCode}
                  status={studentDetails.status}
                />
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
              <h2>Attendance</h2>
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
              <button
                className="button-text-only cursor-pointer"
                onClick={() => navigate("/attendance")}
              >
                See Details
              </button>
            </div>
          </div>
          <Divider sx={{ pt: "20px", mb: "30px" }} />
          <div>
            <h2>Student Information</h2>
            <div className="student-details_student-school-information">
              <div className="student-details_student-school-info-description">
                <p>Starting Date:</p>
                <p>Current class:</p>
                <p>Current level:</p>
                <p>Reference nr:</p>
                <p>WEB-code:</p>
                <p>Contract Signed:</p>
                <p>Extension of contract:</p>
              </div>
              <div>
                <p>{studentDetails.startingDate}</p>
                <p>
                  {studentDetails.groups.map((group) => (
                    <Link to={`/classes/${group.id}`}>
                      <>
                        {group.name} ({group.level})
                      </>
                    </Link>
                  ))}
                </p>
                <p>{studentDetails.groups.map((group) => group.level)}</p>

                <p>
                  {studentDetails.ref}

                  <ContentCopyIcon sx={{ fontSize: 14, paddingLeft: 1 }} />
                </p>
                <p>
                  {studentDetails.webCode}{" "}
                  <ContentCopyIcon
                    sx={{ fontSize: 14, paddingLeft: 0.5 }}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        studentDetails.webCode.textToCopy
                      );
                    }}
                    className="cursor-pointer"
                  />
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
