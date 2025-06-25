import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between w-6xl mx-auto px-5 py-3 bg-gray-300">
        <p className="inline">welcome user</p>
        <button
          type="button"
          className="bg-black text-white p-3 rounded-2xl "
          onClick={() => {
            navigate("/login");
            localStorage.setItem("token", "");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
