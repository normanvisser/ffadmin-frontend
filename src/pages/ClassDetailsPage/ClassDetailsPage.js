import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectGroupDetails } from "../../store/student/selectors";
import { fetchClassDetails } from "../../store/student/thunks";
import "./styles.css";

export default function ClassDetailsPage() {
  const dispatch = useDispatch();
  const classId = useParams().id;
  const classDetails = useSelector(selectGroupDetails);
  console.log(classDetails);

  useEffect(() => {
    dispatch(fetchClassDetails(classId));
  }, []);

  return (
    <div>
      {!classDetails ? (
        "Loading"
      ) : (
        <div>
          <p>Name: {classDetails.name}</p>
          <p>Level: {classDetails.level}</p>
          <div>
            Schedule
            {classDetails.lessonSchedules.map((e) => (
              <div key={e.id}>
                <p>{e.day}</p>
                <p>{e.timeStart}</p>
                <p>{e.timeEnd}</p>
              </div>
            ))}
          </div>
          <div>
            Students
            {classDetails.students.map((student) => (
              <p key={student.id}>
                {student.firstName} {student.lastName}
              </p>
            ))}
          </div>
          <p>Method: {classDetails.teachingMethods.map((e) => e.name)}</p>
          <p>Hours: {classDetails.hours}</p>
          <p>Start Date: {classDetails.startDate}</p>
        </div>
      )}
    </div>
  );

  // teacher
  // co-teacher
}
