import { Route, Routes } from "react-router-dom";
import alertify from "alertifyjs";
import Products from "./components/Products";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CartDetail from "./components/CartDetail";
import ProductDetail from "./components/ProductDetail";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import Footer from "./components/Footer";
import { Container, Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";

function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const changeCategory = (category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.id);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    let newCart = [...cart];
    const addedItem = newCart.find((item) => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
    alertify.success(product.productName + " added to cart", 2);
  };

  const removeToCart = (product) => {
    let newCart = [...cart];
    let updatedCart = newCart.filter((item) => item.product.id !== product.id);
    setCart(updatedCart);
    alertify.error(product.productName + " removed from cart", 2);
  };

  const clearCart = () => {
    setCart([]);
    alertify.warning("Cart cleared", 2);
  };

  const updateCart = (product, action) => {
    if (action === "increase") {
      addToCart(product);
    } else if (action === "decrease") {
      removeToCart(product);
    }
  };

  return (
    <Container>
      <Header clearCart={clearCart} cart={cart} updateCart={updateCart} />
      <Row>
        <Col xs="3">
          <Categories
            chanceCategory={changeCategory}
            currentCategory={currentCategory}
          />
        </Col>
        <Col xs="9">
          <Routes>
            <Route
              path="/"
              element={
                <Products
                  products={products}
                  currentCategory={currentCategory}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/cart"
              element={<CartDetail cart={cart} cartupdate={updateCart} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
