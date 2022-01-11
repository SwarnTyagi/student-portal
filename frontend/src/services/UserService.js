import BaseService from "./BaseService";
class UserService extends BaseService {
  getUsers = () => {
    return this.request({ url: "/users" });
  };
  createUser = (body) => {
    return this.request({ url: "/users", type: "POST", body });
  };
  getUserById = (id) => {
    return this.request({ url: `/users/${id}` });
  };
  updateUser = (id, body) => {
    return this.request({ url: `/users/${id}`, type: "PUT", body });
  };
  deleteUser = (id) => {
    return this.request({ url: `/users/${id}`, type: "DELETE" });
  };
}
export default UserService;
