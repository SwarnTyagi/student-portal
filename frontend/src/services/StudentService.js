import BaseService from "./BaseService";
class StudentService extends BaseService {
  getStudents = () => {
    return this.request({ url: "/students" });
  };
  createStudent = (body) => {
    return this.request({ url: "/students", type: "POST", body });
  };
  deleteStudent = (id) => {
    return this.request({ url: `/students/${id}`, type: "DELETE" });
  };
  updateStudent = (id, body) => {
    return this.request({ url: `/students/${id}`, type: "PUT", body });
  };
  getStudentById = (id) => {
    return this.request({ url: `/students/${id}` });
  };
}
export default StudentService;
