import axios from "axios";
import React, { FC, useState } from "react";
import IPerson from "../../../interfaces/IPerson";

interface ContextProviderProps {
  children?: any;
}

interface ControllerContextProps {
  title: string;
  handleQuery: () => void;
  data: [IPerson?];
}

interface ResponseType {
  results: [IPerson?];
}

const ControllerContext = React.createContext<ControllerContextProps>({
  title: "",
  handleQuery: () => {},
  data: [],
});

const ControllerProvider: FC<ContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<[IPerson?]>([]);

  const handleQuery = async () => {
    const { data, status } = await axios.get<ResponseType>(
      "https://randomuser.me/api/?gender=male&results=50",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    setData(data.results);
  };

  return (
    <ControllerContext.Provider
      value={{
        title: "Variant 2",
        handleQuery,
        data,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
};

export { ControllerContext, ControllerProvider };
