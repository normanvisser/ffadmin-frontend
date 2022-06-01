import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/students/:id" element={<StudentDetailsPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
