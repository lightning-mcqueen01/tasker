import React from "react";
import TaskList from "./TaskList";

function List({ li }) {
  return (
    <div className="border-2">
      <div className="rounded mb-1 w-60 h-80 ">
        <p className="mx-auto bg-gray-400 text-center py-2">{li.name} </p>

        <div className="bg-white p-2">
          {console.log(li.name)}
          {console.log(li._id)}
          {/* {console.log(key)} */}
          <TaskList listId={li._id} />
        </div>
      </div>
    </div>
  );
}

export default List;
