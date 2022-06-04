import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar className="sidebar" />
      <header className="App-header">
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/students/:id" element={<StudentDetailsPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
