import React, { useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Input, Button, notification } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      notification.success({ message: "Login successful!" });
    } catch (error) {
      notification.error({ message: error.message });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Input
        placeholder="Email"
        className="mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input.Password
        placeholder="Password"
        className="mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
