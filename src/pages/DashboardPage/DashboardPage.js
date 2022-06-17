import "./styles.css";
import DashboardBackground from "./Dashboard.webp";
import UnderConstruction from "./Under-Construction.jpeg";

export default function DashboardPage() {
  return (
    <div className="dashboard-div">
      <img
        src={UnderConstruction}
        alt="Under-Construction"
        className="Dashboard-background"
      />
    </div>
  );
}
