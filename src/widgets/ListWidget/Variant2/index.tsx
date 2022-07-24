import React, { FC } from "react";
import { IPageProps } from "../../../interfaces/IPageProps";
import { ControllerProvider } from "./Controller";
import View from "./View";

const Default: React.FC<IPageProps> = () => {
  return (
    <ControllerProvider>
      <View />
    </ControllerProvider>
  );
};

export default Default;
