import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

const Products = (props) => {
  const { products } = props;
  return (
    <>
      <h2>{props.currentCategory}</h2>
      <CardGroup>
        {products.map((product) => (
          <Col xs="3" key={product.id}>
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src={product.image}
                alt={product.productName}
              />
              <CardBody>
                <CardTitle>{product.productName}</CardTitle>
                <CardText>{product.desc}</CardText>
                <Button onClick={() => props.addToCart(product)}>
                  Add To Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </CardGroup>
    </>
  );
};
export default Products;
