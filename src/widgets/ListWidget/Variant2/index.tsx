import React, { FC } from "react";
import { ControllerContext } from "./Controller";
import View from "./View";

const Default = () => {
  const sayHi = () => {
    console.log("hiii implemented");
  };

  const title = "Variant 2";

  return (
    <ControllerContext.Provider
      value={{
        sayHi,
        title,
      }}
    >
      <View />
    </ControllerContext.Provider>
  );
};

export default Default;
