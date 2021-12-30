import BaseService from "./BaseService";
class TeacherService extends BaseService {
  getTeachers = () => {
    return this.request({ url: "/teachers" });
  };
  createTeacher = (body) => {
    return this.request({ url: "/teachers", type: "POST", body });
  };
}
export default TeacherService;
