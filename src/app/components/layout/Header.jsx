import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between  ">
        <Link className="text-primary font-semibold text-2xl " href="/">
          {" "}
          ST PIZZA
        </Link>
        <nav className="flex gap-6 text-gray-500 font-semibold items-center">
          <Link href="/">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
          <nav className="flex gap-4 items-center">
            <Link href="">Login</Link>
            <Link className="bg-primary text-white rounded-full px-8 py-2  " href="register">
              Register
            </Link>
          </nav>
        </nav>
      </header>
    </>
  );
};

export default Header;
