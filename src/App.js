import React, { createContext, useState } from "react";
import Child from "./Child";

export const MyContext = createContext();

function App() {
  const [data, setData] = useState();
  const getData = (item) => {
    console.log(item);
    setData(item);
  };
  return (
    <MyContext.Provider
      value={{
        value: "Hello, world!",
        superValue: "I am Super Child.",
        superDuperValue: "I am the SuperDuper Child.",
        getData: getData,
      }}
    >
      <h1>This is the parent component {data}</h1>
      <Child />
    </MyContext.Provider>
  );
}

export default App;
