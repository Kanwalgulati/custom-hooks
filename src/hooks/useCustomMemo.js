import React, { useEffect, useRef } from "react";

//isEqual Function
const isEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== nextDeps.length) return false;
  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }
  return true;
};

const useCustomMemo = (cb, deps) => {
  //@ Variable or state -> cached value
  const memoizedRef = useRef(null);
  //@ Changes in deps
  if (!memoizedRef.current || !isEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }
  //@ Cleanup Function
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);
  //@ return memoized Value (If any)
  return memoizedRef.current.value;
};
export default useCustomMemo;
