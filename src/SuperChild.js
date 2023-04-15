import React, { useContext } from "react";
import { MyContext } from "./App";
import SuperDuperChild from "./SuperDuperChild";
function SuperChild() {
  const { superValue } = useContext(MyContext);

  return (
    <div>
      <div>{superValue} </div>
      <SuperDuperChild />
    </div>
  );
}

export default SuperChild;
