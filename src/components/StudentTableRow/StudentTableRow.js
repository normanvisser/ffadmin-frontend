import { Link, NavLink, useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./styles.css";

export default function StudentTableRow(props) {
  const navigate = useNavigate();
  const statusColor = () => {
    if (props.status === "Active") {
      return (
        <FiberManualRecordIcon
          className="status-color"
          sx={{ color: "#4acd92", fontSize: 15 }}
        />
      );
    } else if (props.status === "On-Hold") {
      return (
        <FiberManualRecordIcon
          className="status-color"
          sx={{ color: "#ffb554", fontSize: 15 }}
        />
      );
    } else if (props.status === "Stopped") {
      return (
        <FiberManualRecordIcon
          // fontSize="small"
          className="status-color"
          sx={{ color: "#ff6865", fontSize: 15 }}
        />
      );
    } else if (props.status === "Finished") {
      return (
        <FiberManualRecordIcon
          className="status-color"
          sx={{ color: "#e3e3e3", fontSize: 15 }}
        />
      );
    }
  };

  return (
    <tr
      className="student-row"
      onClick={() => navigate(`/students/${props.id}`)}
    >
      <td>{statusColor()}</td>
      <td className="font-weight-600">
        {props.firstName} {props.affix} {props.lastName}
      </td>
      <td>{props.gender}</td>
      <td>{props.dateOfBirth}</td>
      <td>{props.group}</td>
      <td>{props.refNr}</td>
      <td>{props.bsn}</td>
    </tr>
  );
}
