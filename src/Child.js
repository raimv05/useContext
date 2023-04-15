import React, { useContext } from "react";
import { MyContext } from "./App";
import SuperChild from "./SuperChild";
function Child() {
  const { value } = useContext(MyContext);

  return (
    <div>
      <h1>{value} I am the Child component</h1>
      <SuperChild />
    </div>
  );
}

export default Child;
