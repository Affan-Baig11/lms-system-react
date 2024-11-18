import React, { useState } from "react";
import { db } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Input, Button, notification } from "antd";

const UploadResult = () => {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [grade, setGrade] = useState("");

  const handleUpload = async () => {
    try {
      await addDoc(collection(db, "results"), { studentName, courseName, grade });
      notification.success({ message: "Result uploaded successfully!" });
    } catch (error) {
      notification.error({ message: error.message });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Upload Result</h1>
      <Input
        placeholder="Student Name"
        className="mb-2"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <Input
        placeholder="Course Name"
        className="mb-2"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <Input
        placeholder="Grade"
        className="mb-2"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <Button type="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default UploadResult;
