import React from "react";
import NavBar from "./NavBar";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
