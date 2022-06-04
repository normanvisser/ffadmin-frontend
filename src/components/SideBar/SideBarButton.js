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
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText primary={props.title} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
