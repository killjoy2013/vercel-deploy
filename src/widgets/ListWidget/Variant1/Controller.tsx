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

const fetchAxios = async (apiUrl: string) => {
  let resp = axios.get<IResponseType>(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  return (await resp).data.results;
};

const ControllerContext = React.createContext<IControllerContext>({
  data: [],
});

const ControllerProvider: FC<IContextProvider> = ({ children }) => {
  const { apiUrl } = useContext(BrandContext);
  const { isLoading, isError, data, error } = useQuery<[IPerson]>(
    ["initial-data"],
    fetchAxios.bind(null, apiUrl)
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
