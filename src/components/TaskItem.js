import React, { useContext } from "react";

import Context from "../context";

const TaskItem = ({ id, text }) => {
  const { deleteTask } = useContext(Context);
  return (
    <li>
      {text}
      <span onClick={e => deleteTask(id)}> X</span>
    </li>
  );
};

export default TaskItem;
