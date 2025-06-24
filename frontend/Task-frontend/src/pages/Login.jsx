import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="text"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={async () => {
          console.log("hello");
          const response = await axios.post(
            "http://localhost:8000/api/user/login",
            {
              username,
              password,
            }
          );
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }}
      >
        Sign up
      </button>
    </div>
  );
}

export default Login;
