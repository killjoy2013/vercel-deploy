import React, { FC } from "react";
import { IPageProps } from "../../../interfaces/IPageProps";
import { ControllerProvider } from "./Controller";
import View from "./View";

const Default: React.FC<IPageProps> = ({ host, variant }) => {
  return (
    <ControllerProvider variant={variant as number}>
      <View />
    </ControllerProvider>
  );
};

export default Default;
