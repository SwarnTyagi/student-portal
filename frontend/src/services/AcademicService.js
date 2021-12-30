import BaseService from "./BaseService";
class AcademicService extends BaseService {
  getAcademicPlan = () => {
    return this.request({ url: "/academic-plan" });
  };
  updateAcademicPlan = (body, id) => {
    return this.request({
      url: "/academic-plan/" + id,
      body: body,
      type: "PUT",
    });
  };
}

export default AcademicService;
