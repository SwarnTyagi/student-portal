import { ACTION_TYPES } from "./../../utils/constants";
import StudentService from "../../services/StudentService";

const { STUDENTS_LISTING } = ACTION_TYPES;
const studentService = new StudentService();
export const getStudents = () => {
  return async (dispatch) => {
    const { data } = await studentService.getStudents();
    console.log("student data", data);
    dispatch({ type: STUDENTS_LISTING, payload: { list: data.data } });
  };
};
