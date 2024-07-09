import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Cart from "./Cart";
import { useState } from "react";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Ecommerce</NavbarBrand>
      <NavbarToggler onClick={toogle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/kodusta" target="_blank">
              Kodusta
            </NavLink>
          </NavItem>
          <Cart cart={props.cart} removeToCart={props.removeToCart} />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
