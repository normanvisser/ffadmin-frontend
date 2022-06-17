import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddClassForm from "../../components/AddClassForm/AddClassForm";
import ClassesTableRow from "../../components/ClassesTableRow/ClassesTableRow";
import { selectGroups } from "../../store/student/selectors";
import { fetchClasses } from "../../store/student/thunks";
import "./styles.css";

export default function ClassesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses);
  }, [dispatch]);

  const classes = useSelector(selectGroups);

  const renderClasses = classes;

  console.log("Classes", classes);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="classes-page">
      <div className="display-flex-space-between classes-page-title">
        <h1>Class Overview</h1>
      </div>
      <div className="lalala">
        <button
          className="button button-primary add-class-button"
          onClick={() => setOpenForm(true)}
        >
          Add Class
        </button>
        <AddClassForm open={openForm} close={() => setOpenForm(false)} />
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "1.6%" }}></th>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Level</th>
            <th style={{ width: "10%" }}>Teacher</th>
            <th style={{ width: "10%" }}>Co-Teacher</th>
            <th style={{ width: "10%" }}>Start Date</th>
            <th style={{ width: "10%" }}>Total Hours</th>
            <th style={{ width: "5%" }}></th>
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
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}
