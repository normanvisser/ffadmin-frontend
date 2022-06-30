import { useNavigate } from "react-router-dom";

export default function AttendanceTableRow(props) {
  const navigate = useNavigate();

  return (
    <tr
      className="student-row"
      // onClick={() => navigate(`/students/${props.id}`)}
      onClick={() => navigate(`/students/${props.studentId}`)}
    >
      <td></td>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.teacher}</td>
      <td>{props.class}</td>
      <td>{props.date}</td>
      <td>{props.timeStart}</td>
      <td>{props.timeEnd}</td>
      <td>{props.totalHours}</td>
      <td>{props.attendance ? "Present" : "Absent"}</td>
      <td>{props.absenceReason}</td>
      <td></td>
    </tr>
  );
}
