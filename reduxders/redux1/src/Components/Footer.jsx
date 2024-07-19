import React from "react";
import { useSelector } from "react-redux";
export default function Footer() {
  const counter = useSelector((state) => state.counter.value);
  return (
    <div>
      Footer
      <p>Counter: {counter}</p>
    </div>
  );
}
