import StreamVideoProvider from "@/providers/StreamVideoProvider";
import React, { Children, ReactNode } from "react";

interface IRootLayout {
  children: ReactNode;
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
