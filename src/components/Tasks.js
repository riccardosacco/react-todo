import React, { useContext, useState } from "react";

import Context from "../context";

import TaskItem from "./TaskItem";

const Tasks = () => {
  const [text, setText] = useState("");

  const { addTask, tasksFiltered, filter, setFilter } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => {
          setFilter(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTask({ text });
          setText("");
        }}
      >
        Aggiungi task
      </button>
      <ul>
        {tasksFiltered.map((task, index) => (
          <TaskItem key={index} id={index} {...task} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
