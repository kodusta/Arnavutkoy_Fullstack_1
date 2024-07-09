import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";
import { Container, Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const chanceCategory = (category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.id);
  };

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    let newCart = [...cart];
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
  };

  const removeToCart = (product) => {
    let newCart = cart.filter((c) => c.product.id !== product.id);
    setCart(newCart);
  };

  return (
    <Container>
      <Header cart={cart} removeToCart={removeToCart} />
      <Row>
        <Col xs="3">
          <Categories
            chanceCategory={chanceCategory}
            currentCategory={currentCategory}
          />
        </Col>
        <Col xs="9">
          <Products
            addToCart={addToCart}
            products={products}
            chanceCategory={chanceCategory}
            currentCategory={currentCategory}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
