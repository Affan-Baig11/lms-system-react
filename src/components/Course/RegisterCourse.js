import React, { useState } from "react";
import { db } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const RegisterCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await addDoc(collection(db, "courses"), { courseName, courseCode });
      notification.success({ message: "Course registered successfully!" });
      navigate("/register-course-success");
    } catch (error) {
      notification.error({ message: error.message });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Register Course</h1>
      <Input
        placeholder="Course Name"
        className="mb-2"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <Input
        placeholder="Course Code"
        className="mb-2"
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
      />
      <Button type="primary" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};

export default RegisterCourse;
