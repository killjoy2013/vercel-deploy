import React from "react";
import { IWidgetProps } from "../../../interfaces/IWidgetProps";
import { ControllerProvider } from "./Controller";
import View from "./View";

const Default: React.FC<IWidgetProps> = ({ variant }) => {
  return (
    <ControllerProvider variant={variant}>
      <View />
    </ControllerProvider>
  );
};

export default Default;
