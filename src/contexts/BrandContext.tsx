import React, { FC } from "react";
import IAppConfig from "../interfaces/IAppConfig";

interface IBrandContext extends IAppConfig {}

interface IBrandContextProvider extends IBrandContext {
  children: any;
}

export const BrandContext = React.createContext<IBrandContext>({
  domain: "",
  title: "",
  variant: 0,
  imageUrl: "",
});

export const BrandContextProvider: FC<IBrandContextProvider> = ({
  domain,
  title,
  variant,
  children,
  imageUrl,
}) => {
  return (
    <BrandContext.Provider value={{ domain, title, variant, imageUrl }}>
      {children}
    </BrandContext.Provider>
  );
};
