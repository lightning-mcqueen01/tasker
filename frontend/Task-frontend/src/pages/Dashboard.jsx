import React from "react";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";

function Dashboard() {
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8000/api/user/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      setLists(res.data.lists);
    };
    fetchData();
  }, []);

  const handleAddList = async () => {
    if (listName == "") {
      alert("Enter list name");
      return;
    }
    console.log("hello");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/user/list",
        { name: listName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      setLists([...lists, res.data.list]);
      setListName("");
    } catch (err) {
      alert("Failed to add list");
    }
  };
  return (
    <div>
      <Navbar />

      <div className="mt-16 w-6xl mx-auto">
        <h3 className="text-lg font-semibold mb-2 ">Your Lists:</h3>
        <div className="flex gap-3 w-6xl overflow-x-scroll pb-5">
          {lists.map(
            (list, index) => (
              console.log("List:", list),
              (<List key={list._id} li={list} ind={index} val="hello" />)
            )
          )}
        </div>
      </div>

      <div className="absolute top-20 right-2">
        <input
          type="text"
          className="border-1 p-3"
          value={listName}
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
