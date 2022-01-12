import { ACTION_TYPES } from "./../../utils/constants";
import StudentService from "../../services/StudentService";

const {
  STUDENTS_LISTING,
  STUDENTS_DELETION,
  STUDENTS_UPDATION,
  STUDENTS_GET_BY_ID,
} = ACTION_TYPES;
const studentService = new StudentService();
export const getStudents = () => {
  return async (dispatch) => {
    const { data } = await studentService.getStudents();
    console.log("student data", data);
    dispatch({ type: STUDENTS_LISTING, payload: { list: data.data } });
  };
};
export const deleteStudent = (id, cb) => {
  return async (dispatch) => {
    await studentService.deleteStudent(id);
    cb();
    dispatch({ type: STUDENTS_DELETION });
  };
};

export const updateStudent = (id, body, cb) => {
  return async (dispatch) => {
    await studentService.updateStudent(id, body);
    cb();
    dispatch({ type: STUDENTS_UPDATION });
  };
};

export const getStudent = (id) => {
  return async (dispatch) => {
    const { data } = await studentService.getStudentById(id);
    dispatch({ type: STUDENTS_GET_BY_ID, student: data.data });
  };
};

export const clearCurrentStudent = () => {
  return (dispatch) => {
    dispatch({ type: STUDENTS_UPDATION });
  };
};
