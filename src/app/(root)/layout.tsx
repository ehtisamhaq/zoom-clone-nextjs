import React, { Children, ReactNode } from "react";

interface IRootLayout {
  children: ReactNode;
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return <main>{children}</main>;
};

export default RootLayout;
