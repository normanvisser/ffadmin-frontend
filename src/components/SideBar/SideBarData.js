import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

export const sideBarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    id: 2,
    title: "Students",
    icon: <AccessibilityNewIcon />,
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
    icon: <BorderColorIcon />,
    link: "/attendance",
  },
];
