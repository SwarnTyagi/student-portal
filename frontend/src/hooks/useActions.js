import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const useActions = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
};

export default useActions;
