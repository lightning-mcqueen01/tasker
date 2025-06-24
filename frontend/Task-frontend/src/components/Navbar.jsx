import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between w-6xl mx-auto px-5 py-3 bg-gray-300">
        <p className="inline">welcome user</p>
        <button type="button" className="">

          logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
