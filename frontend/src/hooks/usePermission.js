import { getData } from "./../utils/localStorageUtils";
import { useState, useEffect } from "react";

const usePermission = () => {
  const [permission, setPermission] = useState({});
  useEffect(() => {
    setPermission(JSON.parse(getData("permissions")));
  }, []);
  return permission;
};

export default usePermission;
