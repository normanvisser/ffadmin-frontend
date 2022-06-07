import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./styles.css";

export const sideBarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <GridViewRoundedIcon />,
    link: "/",
  },
  {
    id: 2,
    title: "Students",
    icon: <AccessibilityNewRoundedIcon />,
    link: "/students",
  },
  {
    id: 3,
    title: "Classes",
    icon: <GroupsIcon />,
    link: "/classes",
  },
  {
    id: 4,
    title: "Attendance",
    icon: <EventAvailableRoundedIcon />,
    link: "/attendance",
  },
  {
    id: 5,
    title: "Log Out",
    icon: <LogoutRoundedIcon className="logout-icon" />,
    link: "/logout",
  },
];
