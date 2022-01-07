import axios from "axios";
import { getData } from "./../utils/localStorageUtils";

class BaseService {
  request = (options) => {
    let _request = null;
    let finalUrl = "http://localhost:8000";
    const token = getData("token");
    let tokenHeader = { Authorization: token || "" };
    const { url, type = "GET", params, body, headers = {} } = options;
    finalUrl = finalUrl + url;
    switch (type) {
      case "GET": {
        _request = axios.get(finalUrl, {
          headers: { ...headers, ...tokenHeader },
        });
        break;
      }

      case "POST": {
        _request = axios.post(finalUrl, body, {
          headers: { ...headers, ...tokenHeader },
        });
        break;
      }
      case "PUT": {
        _request = axios.put(finalUrl, body, {
          headers: { ...headers, ...tokenHeader },
        });
        break;
      }
      case "DELETE": {
        _request = axios.delete(finalUrl, {
          headers: { ...headers, ...tokenHeader },
        });
        break;
      }
    }
    return _request;
  };
}

export default BaseService;
