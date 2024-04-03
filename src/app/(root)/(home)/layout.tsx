import React, { ReactNode } from "react";

import Navbar from "@/components/home/Navbar";
import Sidebar from "@/components/home/Sidebar";

interface IHomeLayout {
  children: ReactNode;
}

const HomeLayout: React.FC<IHomeLayout> = ({ children }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-5 pb-5 pt-24 max-md:pb-12 sm:px-12">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
