import React, { useState } from "react";
import { db } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const RegisterTeacher = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await addDoc(collection(db, "teachers"), { name, email });
      notification.success({ message: "Teacher registered successfully!" });
      navigate("/register-teacher-success");
    } catch (error) {
      notification.error({ message: error.message });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Register Teacher</h1>
      <Input
        placeholder="Name"
        className="mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        className="mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="primary" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};

export default RegisterTeacher;
