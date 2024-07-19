import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
    </Navbar>
  );
}
