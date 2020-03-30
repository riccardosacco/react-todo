import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_FILTER,
  CLEAR_FILTER
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        tasksFiltered: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
        tasksFiltered: state.tasks.filter(
          (task, index) => index !== action.payload
        )
      };
    case SET_FILTER:
      const REGEX = new RegExp(action.payload, "gi");
      return {
        ...state,
        filter: action.payload,
        tasksFiltered:
          action.payload !== ""
            ? state.tasks.filter(task => task.text.match(REGEX))
            : state.tasks
      };
    default:
      return state;
  }
};
