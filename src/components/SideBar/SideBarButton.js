import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function SideBarButton(props) {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href={props.link}>
            <ListItemIcon style={{ minWidth: "40px" }}>
              {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.title} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
