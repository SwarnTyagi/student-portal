import axios from "axios";
class BaseService {
  request = (options) => {
    let _request = null;
    let finalUrl = "https://61b4eb8b0e84b700173319fd.mockapi.io/api/v1";
    const { url, type = "GET", params, body, headers } = options;
    finalUrl = finalUrl + url;
    switch (type) {
      case "GET": {
        _request = axios.get(finalUrl);
        break;
      }

      case "POST": {
        _request = axios.post(finalUrl, body);
        break;
      }
      case "PUT": {
        _request = axios.put(finalUrl, body);
        break;
      }
      case "DELETE": {
        break;
      }
    }
    return _request;
  };
}

export default BaseService;
