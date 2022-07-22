import React, { FC } from "react";
import { ControllerProvider } from "./Controller";
import View from "./View";

const Default = () => {
  return (
    <ControllerProvider>
      <View />
    </ControllerProvider>
  );
};

export default Default;
