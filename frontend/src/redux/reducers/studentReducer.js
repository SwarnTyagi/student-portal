import { ACTION_TYPES } from "./../../utils/constants";
import initialState from "./../initialStates/studentInitialState";

const { STUDENTS_LISTING } = ACTION_TYPES;

const studentReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case STUDENTS_LISTING:
      {
        newState.list = action.payload.list;
        return newState;
      }
      break;

    default:
      return newState;
      break;
  }
  return newState;
};
export default studentReducer;
