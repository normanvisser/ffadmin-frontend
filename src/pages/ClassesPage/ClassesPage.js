import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassesTableRow from "../../components/ClassesTableRow/ClassesTableRow";
import { selectGroups } from "../../store/student/selectors";
import { fetchClasses } from "../../store/student/thunks";

export default function ClassesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses);
  }, []);

  const classes = useSelector(selectGroups);

  const renderClasses = classes;

  console.log("Classes", classes);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* <th style={{ width: "8%" }}>Status</th> */}
            <th>Name</th>
            <th>Level</th>
            <th style={{ width: "13%" }}>Teacher</th>
            <th style={{ width: "15%" }}>Co-Teacher</th>
            <th style={{ width: "12%" }}>Start Date</th>
            <th style={{ width: "15%" }}>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {!classes
            ? "Loading.."
            : renderClasses.map((group) => (
                <ClassesTableRow
                  key={group.id}
                  id={group.id}
                  name={group.name}
                  level={group.level}
                  teacher={group.user_groups_roles
                    .filter((role) => role.role === "teacher")
                    .map(
                      (role) => role.user.firstName + " " + role.user.lastName
                    )}
                  coTeacher={group.user_groups_roles
                    .filter((role) => role.role === "co-teacher")
                    .map(
                      (role) => role.user.firstName + " " + role.user.lastName
                    )}
                  startDate={group.startDate}
                  hours={group.hours}
                  // status={group.status}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}
