import BaseService from "./BaseService";
class TeacherService extends BaseService {
  getTeachers = () => {
    return this.request({ url: "/teachers" });
  };
}
export default TeacherService;
