import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between z-50 bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center justify-between gap-1">
        <Image
          src={"/icons/logo.svg"}
          alt="Logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-2xl font-bold text-white max-sm:hidden">Yoom</p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk - User Management */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
