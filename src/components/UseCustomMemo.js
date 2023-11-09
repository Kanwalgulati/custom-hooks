import React, { useMemo, useState } from "react";
import useCustomMemo from "../hooks/useCustomMemo";

const UseCustomMemo = () => {
  const [counter, setCounter] = useState(2);
  const [counter2, setCounter2] = useState(100);
  const Multiply = () => {
    console.log("Expensive Calculation");
    return counter * counter;
  };
  //const memoizedMultiply = useMemo(Multiply, [counter]);
  const memoizedMultiply = useCustomMemo(Multiply, [counter]);
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
          Counter
        </span>
        <span>{counter}</span>
      </div>
      <div>
        <span style={{ fontWeight: 600, color: "#d1d1d1", margin: 15 }}>
          Square
        </span>
        <span>{memoizedMultiply}</span>
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
            setCounter((val) => val + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div style={{ marginTop: "25px" }}>
        <span style={{ fontWeight: 600, color: "#d1d1d1", margin: 15 }}>
          Counter2
        </span>
        <span>{counter2}</span>
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
            setCounter2((val) => val - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseCustomMemo;
