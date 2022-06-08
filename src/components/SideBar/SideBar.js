import "./styles.css";
import { sideBarData } from "./SideBarData";
import SideBarButton from "./SideBarButton";
import { useLocation } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import logoFc from "./fc-logo-blue-transparent.png";

export default function SideBar() {
  const location = useLocation().pathname;
  if (location === "/login") return null;

  return (
    <div className="side-bar">
      <div>
        <div>
          <img
            src={logoFc}
            alt="logo-fairfield-college"
            className="sidebar-logo"
          />
        </div>

        <div>
          {sideBarData.map((data) => (
            <SideBarButton
              key={data.id}
              title={data.title}
              icon={data.icon}
              link={data.link}
            />
          ))}
        </div>
      </div>

      <div className="logout-button">
        <SideBarButton
          title="Log Out"
          icon={<LogoutRoundedIcon className="logout-icon" />}
          link="/logout"
        />
      </div>
    </div>
  );
}
