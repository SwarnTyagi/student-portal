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
}
export default StudentService;
