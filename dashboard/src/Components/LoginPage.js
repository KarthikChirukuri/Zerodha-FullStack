import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//This is normal ease purpose main login page will be the frontend code itself this is just for the ease access

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            await axios.post(
                "http://localhost:8080/login",
                new URLSearchParams({
                    username: username,
                    password: password
                }),
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            );
            // alert("Login Success");
            // navigate("/");
            setTimeout(() => {
                navigate("/");
            }, 500);
        } catch (error) {
            alert("Login Failed");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;