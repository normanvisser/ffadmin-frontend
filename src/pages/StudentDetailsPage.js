import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificStudent } from "../store/student/thunks";
import { selectSpecificStudent } from "../store/student/selectors";

export default function StudentDetailsPage() {
  const dispatch = useDispatch();
  const studentId = useParams().id;

  useEffect(() => {
    dispatch(fetchSpecificStudent(studentId));
  }, []);

  const studentDetails = useSelector(selectSpecificStudent);
  console.log(studentDetails);

  return <div>details</div>;
}
