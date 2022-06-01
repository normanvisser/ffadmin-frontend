import { Link } from "react-router-dom";

export default function StudentTableRow(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.gender}</td>
      <td>{props.dateOfBirth}</td>
      <td>{props.refNr}</td>
      <Link to={`/students/${props.id}`}>
        <td>
          <i>Details >></i>
        </td>
      </Link>
    </tr>
  );
}
