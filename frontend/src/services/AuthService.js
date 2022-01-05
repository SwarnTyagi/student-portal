import BaseService from "./BaseService";
class AuthService extends BaseService {
  login = (body) => {
    return this.request({
      url: "/auth/login",
      body: body,
      type: "POST",
    });
  };
  register = (body) => {
    return this.request({
      url: "/auth/register",
      body: body,
      type: "POST",
    });
  };
}

export default AuthService;
