import React from "react";
import Topbar from "./Topbar";
import Icons from "./Icons";
import Search from "./Search";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header header-intro-clearance header-4">
      <Topbar />
      <div className="header-middle">
        <div className="container">
          <Logo />
          <Search />
          <Icons />
        </div>
      </div>
      <Navbar />
    </header>
  );
}
