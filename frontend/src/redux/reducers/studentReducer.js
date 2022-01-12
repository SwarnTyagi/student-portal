import { ACTION_TYPES } from "./../../utils/constants";
import initialState from "./../initialStates/studentInitialState";

const {
  STUDENTS_LISTING,
  STUDENTS_DELETION,
  STUDENTS_UPDATION,
  STUDENTS_GET_BY_ID,
} = ACTION_TYPES;

const studentReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case STUDENTS_LISTING:
      {
        newState.list = action.payload.list;
        return newState;
      }
      break;
    case STUDENTS_DELETION:
      {
        return newState;
      }
      break;
    case STUDENTS_UPDATION:
      {
        newState.studentData = null;
        return newState;
      }
      break;

    case STUDENTS_GET_BY_ID:
      {
        newState.studentData = action.student;
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
