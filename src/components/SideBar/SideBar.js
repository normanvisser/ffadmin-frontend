import "./styles.css";
import { sideBarData } from "./SideBarData";
import SideBarButton from "./SideBarButton";
import { Typography } from "@mui/material";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="logo">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fairfield College
        </Typography>
      </div>
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
