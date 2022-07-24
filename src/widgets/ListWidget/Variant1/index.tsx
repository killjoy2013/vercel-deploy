import React from "react";
import { ControllerProvider } from "./Controller";
import View from "./View";

const Default: React.FC = () => {
  return (
    <ControllerProvider>
      <View />
    </ControllerProvider>
  );
};

export default Default;
