import React, { useReducer } from "react";

import Context from "./index";
import reducer from "./reducer";

import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_FILTER,
  CLEAR_FILTER
} from "./types";

const State = props => {
  const initialState = {
    filter: "",
    tasks: [],
    tasksFiltered: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  };

  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  };

  const setFilter = filter => {
    dispatch({
      type: SET_FILTER,
      payload: filter
    });
  };

  return (
    <Context.Provider
      value={{
        filter: state.filter,
        tasks: state.tasks,
        tasksFiltered: state.tasksFiltered,
        addTask,
        deleteTask,
        setFilter
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
