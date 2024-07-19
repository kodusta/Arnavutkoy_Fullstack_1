import React from "react";
import { useSelector } from "react-redux";
export default function Header() {
  const counter = useSelector((state) => state.counter.value);
  return (
    <div>
      Header
      <p>Counter: {counter}</p>
    </div>
  );
}
