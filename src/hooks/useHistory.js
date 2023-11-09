import React from "react";
import { useEffect } from "react";

const useHistory = (val) => {
  const previousValue = React.useRef(null);
  useEffect(() => {
    previousValue.current = val;
  }, [val]);
  return [previousValue.current];
};

export default useHistory;


