import React from "react";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      setLists(lists);
    };
    fetchData();
  }, []);

  const handleAddList = async () => {
    console.log("hello");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/user",
        { name: listName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      setLists([...lists, res.data]);
      // setListTitle("");
    } catch (err) {
      alert("Failed to add list");
    }
  };
  return (
    <div>
      <Navbar />

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Your Lists:</h3>
        {lists.map((list, index) => (
          <div key={index} className="p-2 bg-gray-200 rounded mb-1">
            {list.name}
          </div>
        ))}
      </div>

      <div className="absolute top-16 right-2">
        <input
          type="text"
          className="border-1 p-3"
          onChange={(e) => {
            setListName(e.target.value);
          }}
        />
        <button className="p-4 bg-black text-white " onClick={handleAddList}>
          Add List
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

