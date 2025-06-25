import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function TaskList({ listId }) {
  const [taskName, setTaskName] = useState([]);
  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      // console.log("sdligndogindsofijsadmfsdsdlndsfdsfsdf");
      console.log("Fetching tasks for listId:", listId);
      const res = await axios.get(
        `http://localhost:8000/api/user/task/${listId}`,
        // { listId: listId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks(res.data);
    } catch (err) {
      console.error("task not load");
    }
  };

  const createTask = async () => {
    if (taskName == "") {
      alert("Enter Task name");
      return;
    }
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:8000/api/user/task",
      { name: taskName, listId },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    setTasks([...tasks, res.data.task]);
    setTaskName("");
    alert("Task created");
  };

  const completeTask = async (taskId) => {
    const token = localStorage.getItem("token");
    console.log(taskId);
    try {
      const res = await axios.put(
        `http://localhost:8000/api/user/task/${taskId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (err) {
      console.error("err ----", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [listId]);

  return (
    <div className="relative ">
      <div className="bg-white w-full h-60  overflow-y-scroll">
        <div className="">
          <ul className="my-2">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="flex gap-3 items-center bg-gray-300 p-2 rounded mb-2 "
              >
                <input
                  type="checkbox"
                  onChange={() => {
                    completeTask(task._id);
                  }}
                />
                <span>{task.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col absolute bg-white top-48 items-center w-full">
          <input
            type="text"
            className=" bg-white border-1 py-1 px-2"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            placeholder="Add"
          />
          <button
            type="button"
            className="bg-black text-white p-2"
            onClick={createTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
