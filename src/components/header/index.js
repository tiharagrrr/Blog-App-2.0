import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav>
      <Link href="/">Home</Link>       
      </nav>
    </header>
  )
};

export default Header;
