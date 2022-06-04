import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import "./styles.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fairfield College
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
