import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectGroupDetails } from "../../store/student/selectors";
import { fetchClassDetails } from "../../store/student/thunks";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "./styles.css";

export default function ClassDetailsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classId = useParams().id;
  const classDetails = useSelector(selectGroupDetails);
  console.log("Class details", classDetails);

  useEffect(() => {
    dispatch(fetchClassDetails(classId));
  }, [dispatch]);

  return (
    <div>
      {!classDetails ? (
        "Loading"
      ) : (
        <div className="class-details-page">
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
          <h1>Class: {classDetails.name}</h1>
          {/* <h3>Details</h3> */}
          <div className="df jcsb class-details-and-schedule">
            <div className="class-details">
              <h3>Details</h3>
              <div className="df jcsb">
                <div className="fw600">
                  <p>Level: </p>
                  <p>Method: </p>
                  <p>Hours: </p>
                  <p>Start Date: </p>
                  <p>Teacher: </p>
                  <p>Co-Teacher: </p>
                </div>
                <div>
                  <p>{classDetails.level}</p>
                  <p>{classDetails.teachingMethods.map((e) => e.name)}</p>
                  <p>{classDetails.hours}</p>
                  <p>{classDetails.startDate}</p>
                  <p>
                    {classDetails.users[0].firstName}{" "}
                    {classDetails.users[0].lastName}
                  </p>
                  <p>
                    {classDetails.users[1].firstName}{" "}
                    {classDetails.users[1].lastName}
                  </p>
                </div>
              </div>
            </div>
            <div className="class-schedule">
              <h3>Schedule</h3>
              <div className="df jcsb">
                <div className="">
                  {classDetails.lessonSchedules.map((e) => (
                    <p key={e.id}>
                      <b>{e.day}</b>:
                    </p>
                  ))}
                </div>
                <div className="">
                  {classDetails.lessonSchedules.map((e) => (
                    <p key={e.id}>
                      {e.timeStart} - {e.timeEnd}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="class-details-students">
            <h3>Students</h3>
            {classDetails.students.map((student) => (
              <div className="class-details-student-list">
                <img
                  src={student.imageUrl}
                  alt={`${student.firstName} ${student.lastName}`}
                  className="class-details-student-image"
                />

                <p key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
