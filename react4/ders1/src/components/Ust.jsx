import Sepet from "./Sepet";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
const Ust = (props) => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Kodusta</NavbarBrand>
      <NavbarToggler onClick={props.toggle} />
      <Collapse isOpen={props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/kodusta" target="_blank">
              Kodusta
            </NavLink>
          </NavItem>
          <Sepet
            sepet={props.sepet}
            sepetguncelle={props.sepetguncelle}
            sepetsifirla={props.sepetsifirla}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Ust;
