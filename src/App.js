import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterStudent from "./components/Student/RegisterStudent";
import RegisterSuccess from "./components/Student/RegisterSuccess";
import RegisterCourse from "./components/Course/RegisterCourse";
import CourseSuccess from "./components/Course/RegisterSuccess";
import ViewResult from "./components/Result/ViewResult";
import UploadResult from "./components/Result/UploadResult";
import RegisterTeacher from "./components/Teacher/RegisterTeacher";
import TeacherSuccess from "./components/Teacher/RegisterSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/register-student-success" element={<RegisterSuccess />} />
        <Route path="/register-course" element={<RegisterCourse />} />
        <Route path="/register-course-success" element={<CourseSuccess />} />
        <Route path="/view-result" element={<ViewResult />} />
        <Route path="/upload-result" element={<UploadResult />} />
        <Route path="/register-teacher" element={<RegisterTeacher />} />
        <Route path="/register-teacher-success" element={<TeacherSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
