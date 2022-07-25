import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC, useContext } from "react";
import { BrandContext } from "../../../contexts/BrandContext";
import IPerson from "../../../interfaces/IPerson";
import {
  IContextProvider,
  IControllerContext,
  IResponseType,
} from "../interfaces";

const fetchAxios = async () => {
  let resp = axios.get<IResponseType>(
    "https://swapi.dev/api/people/?format=json",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return (await resp).data.results;
};

const ControllerContext = React.createContext<IControllerContext>({
  data: [],
});

const ControllerProvider: FC<IContextProvider> = ({ children }) => {
  const { title } = useContext(BrandContext);
  const { isLoading, isError, data, error } = useQuery<[IPerson]>(
    ["initial-data"],
    fetchAxios
  );

  return (
    <ControllerContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
};

export { ControllerContext, ControllerProvider };
