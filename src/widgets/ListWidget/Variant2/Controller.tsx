import { title } from "process";
import React from "react";
import View from "./View";

interface ControllerContextProps {
  title: string;
  sayHi: () => void;
}

export const ControllerContext = React.createContext<ControllerContextProps>({
  title: "",
  sayHi: () => {
    console.log("Hiiii");
  },
});
