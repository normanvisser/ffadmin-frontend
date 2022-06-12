import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import StudentDetailsPage from "./pages/StudentDetailsPage/StudentDetailsPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import ClassesPage from "./pages/ClassesPage/ClassesPage";
import ClassDetailsPage from "./pages/ClassDetailsPage/ClassDetailsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bootstrapLoginState } from "./store/user/thunks";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import { selectToken, selectLoginAttempt } from "./store/user/selectors";
import AttendancePage from "./pages/AttendancePage/AttendancePage";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const loginAttempt = useSelector(selectLoginAttempt);

  useEffect(() => {
    if (!token && loginAttempt) navigate(`/login`);
  }, [token, navigate, loginAttempt]);

  useEffect(() => {
    dispatch(bootstrapLoginState);
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideBar className="sidebar" />
        <header className="App-header">
          <div>{/* <NavBar /> */}</div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/:id" element={<StudentDetailsPage />} />
            <Route path="/classes/" element={<ClassesPage />} />
            <Route path="/classes/:id" element={<ClassDetailsPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
          </Routes>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
