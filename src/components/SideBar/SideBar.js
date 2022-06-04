import "./styles.css";
import { sideBarData } from "./SideBarData";
import SideBarButton from "./SideBarButton";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="logo">Logo</div>
      {sideBarData.map((data) => (
        <SideBarButton
          key={data.id}
          title={data.title}
          icon={data.icon}
          link={data.link}
        />
      ))}
    </div>
  );
}
