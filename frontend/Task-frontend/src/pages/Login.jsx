import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex justify-between">
      <div className="mx-auto my-auto bg-blue-400 p-8 rounded-2xl">
        <h2 className="text-center mb-8 text-3xl">Login</h2>
        <div className="flex gap-2 mb-5 justify-between items-center">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            className="border-1 rounded-2xl bg-white p-2"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-2 mb-3 justify-between items-center">
          <label htmlFor="password">password: </label>
          <input
            type="text"
            id="password"
            className="border-1 rounded-2xl bg-white p-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="button"
            className="bg-black text-white rounded-2xl p-4"
            onClick={async () => {
              console.log("hello");
              
              if(username == "") {
                alert("Enter your Name");
              }
              if(password == "") {
                alert("Enter Password");
              }
              const response = await axios.post(
                "http://localhost:8000/api/user/login",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              
              if(localStorage.getItem("token") !== "")
                navigate("/home");
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
