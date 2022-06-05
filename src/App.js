import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Quicksand",
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideBar className="sidebar" />
        <header className="App-header">
          <div>{/* <NavBar /> */}</div>
          <Routes>
            <Route path="/" element={<StudentsPage />} />
            <Route path="/students/:id" element={<StudentDetailsPage />} />
          </Routes>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
