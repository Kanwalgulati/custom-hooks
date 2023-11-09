import React, { useState } from "react";
import useHistory from "../hooks/useHistory";

const UseHistory = () => {
  const [val, setVal] = useState(0);
  const [prevValue] = useHistory(val);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        flexDirection: "column",
      }}
    >
      <div>
        <span style={{ fontWeight: 600, color: "#d1d1d1", margin: 15 }}>
          Previous Value
        </span>
        <span>{prevValue}</span>
      </div>
      <div>
        <span style={{ fontWeight: 600, color: "#d1d1d1", margin: 15 }}>
          Current Value
        </span>
        <span>{val}</span>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "aliceblue",
            padding: 10,
            width: 100,
            borderRadius: 20,
            marginTop: 20,
          }}
          onClick={() => {
            setVal((val) => val + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseHistory;
