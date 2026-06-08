import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post(
        "http://localhost:8080/login",

        new URLSearchParams({
          username: username,
          password: password,
        }),

        {
          withCredentials: true,

          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      alert("Login Success");

      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.log(error);

      alert("Login Failed");
    }
  };

  return (
    <>
      <div className="login-page">

        {/* Animated Background Circles */}

        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>

        {/* Login Card */}

        <div className="login-card">

          <h1>Welcome Back</h1>

          <p className="subtitle">
            Login to continue your trading journey
          </p>

          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin}>
            Login
          </button>

        </div>
      </div>
    </>
  );
}

export default Signup;