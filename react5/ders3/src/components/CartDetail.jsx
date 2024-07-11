import { Button, Table } from "reactstrap";
function CartDetail(props) {
  return (
    <>
      <h2>Cart Details</h2>
      {props.cart.length === 0 ? (
        <p>Your cart empty</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.cart.map((item) => (
              <tr key={item.product.id}>
                <td>{item.product.productName}</td>
                <td>{item.quantity}</td>
                <button
                  style={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={() => props.updateCart(item.product, "increase")}
                >
                  +
                </button>{" "}
                {item.product.productName}- {item.quantity}{" "}
                <button
                  style={{ cursor: "pointer", marginLeft: "5px" }}
                  onClick={() => props.updateCart(item.product, "decrease")}
                >
                  -
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
export default CartDetail;
