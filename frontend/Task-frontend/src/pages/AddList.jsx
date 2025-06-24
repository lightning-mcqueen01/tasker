import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function AddList() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <label htmlFor="listname">Enter List Name : </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <button
        className="p-4 bg-black text-white"
        onClick={async () => {
          const token = localStorage.getItem("token");
          const res = await axios.post(
            "http://localhost:8000/api/user",
            {
              name,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log(res.data);
          navigate("/");
        }}
      >
        Add List
      </button>
    </div>
  );
}

export default AddList;
