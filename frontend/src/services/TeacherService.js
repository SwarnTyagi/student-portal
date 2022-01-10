import BaseService from "./BaseService";
class TeacherService extends BaseService {
  getTeachers = () => {
    return this.request({ url: "/teachers" });
  };
  createTeacher = (body) => {
    return this.request({ url: "/teachers", type: "POST", body });
  };
  getTeacherById = (id) => {
    return this.request({ url: `/teachers/${id}` });
  };
  updateTeacher = (id, body) => {
    return this.request({ url: `/teachers/${id}`, type: "PUT", body });
  };
  deleteTeacher = (id) => {
    return this.request({ url: `/teachers/${id}`, type: "DELETE" });
  };
}
export default TeacherService;
