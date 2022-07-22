import React, { FC, useContext } from "react";
import { ControllerContext } from "./Controller";

const View = () => {
  const { sayHi, title } = useContext(ControllerContext);

  return <div>{title}</div>;
};

export default View;
