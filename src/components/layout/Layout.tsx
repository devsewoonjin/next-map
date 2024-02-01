import React from "react";
import Navbar from "../navBar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout__div">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
