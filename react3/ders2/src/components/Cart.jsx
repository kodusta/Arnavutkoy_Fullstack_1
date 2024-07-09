import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Cart = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Cart - {props.cart.length}
      </DropdownToggle>
      <DropdownMenu right>
        {props.cart.map((cartItem) => (
          <DropdownItem key={cartItem.product.id}>
            <span
              onClick={() => props.removeToCart(cartItem.product)}
              className="badge badge-danger"
              style={{ marginRight: "10px", backgroundColor: "red" }}
            >
              X
            </span>
            {cartItem.product.productName}
            <span
              className="badge badge-warning"
              style={{ backgroundColor: "green" }}
            >
              {cartItem.quantity}
            </span>
          </DropdownItem>
        ))}
        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Cart;
