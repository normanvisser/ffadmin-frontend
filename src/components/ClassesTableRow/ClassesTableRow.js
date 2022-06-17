import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ClassesTableRow(props) {
  const navigate = useNavigate();

  return (
    <tr className="class-row" onClick={() => navigate(`/classes/${props.id}`)}>
      {/* <td>{statusColor()}</td> */}
      <td></td>
      <td className="font-weight-600">{props.name}</td>
      <td>{props.level}</td>
      <td>{props.teacher}</td>
      <td>{props.coTeacher}</td>
      <td>{props.startDate}</td>
      <td>{props.hours}</td>
      <td></td>
    </tr>
  );
}
