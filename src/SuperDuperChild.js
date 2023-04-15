import React, { useContext } from "react";
import { MyContext } from "./App";

function SuperDuperChild() {
  const { superDuperValue, getData } = useContext(MyContext);
  const data = "I am the data which is send from SuperDuperChild to Parent.";
  return (
    <div>
      <div>{superDuperValue}</div>
      <button onClick={() => getData(data)}>Click Me</button>
    </div>
  );
}

export default SuperDuperChild;
