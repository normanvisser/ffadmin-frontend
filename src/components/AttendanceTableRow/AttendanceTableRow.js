export default function AttendanceTableRow(props) {
  return (
    <tr
      className="student-row"
      // onClick={() => navigate(`/students/${props.id}`)}
    >
      <td></td>
      <td>{"statusColor()"}</td>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.timeStart}</td>
      <td>{props.timeEnd}</td>
      <td>{props.totalHours}</td>
      <td>{props.attendance}</td>
      <td>{props.absenceReason}</td>
      <td></td>
    </tr>
  );
}
