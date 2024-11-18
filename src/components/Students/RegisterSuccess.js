import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Registration Successful</h1>
      <Button type="primary" onClick={() => navigate("/")}>
        Back to Login
      </Button>
    </div>
  );
};

export default RegisterSuccess;
