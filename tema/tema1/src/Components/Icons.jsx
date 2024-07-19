import React from "react";

export default function Icons() {
  return (
    <div className="header-right">
      <div className="dropdown compare-dropdown">
        <a
          href="#"
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
          title="Compare Products"
          aria-label="Compare Products"
        >
          <div className="icon">
            <i className="icon-random"></i>
          </div>
          <p>Compare</p>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <ul className="compare-products">
            <li className="compare-product">
              <a href="#" className="btn-remove" title="Remove Product">
                <i className="icon-close"></i>
              </a>
              <h4 className="compare-product-title">
                <a href="product.html">Blue Night Dress</a>
              </h4>
            </li>
            <li className="compare-product">
              <a href="#" className="btn-remove" title="Remove Product">
                <i className="icon-close"></i>
              </a>
              <h4 className="compare-product-title">
                <a href="product.html">White Long Skirt</a>
              </h4>
            </li>
          </ul>
          <div className="compare-actions">
            <a href="#" className="action-link">
              Clear All
            </a>
            <a href="#" className="btn btn-outline-primary-2">
              <span>Compare</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="wishlist">
        <a href="wishlist.html" title="Wishlist">
          <div className="icon">
            <i className="icon-heart-o"></i>
            <span className="wishlist-count badge">3</span>
          </div>
          <p>Wishlist</p>
        </a>
      </div>
      <div className="dropdown cart-dropdown">
        <a
          href="#"
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          <div className="icon">
            <i className="icon-shopping-cart"></i>
            <span className="cart-count">2</span>
          </div>
          <p>Cart</p>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-cart-products">
            <div className="product">
              <div className="product-cart-details">
                <h4 className="product-title">
                  <a href="product.html">Beige knitted elastic runner shoes</a>
                </h4>
                <span className="cart-product-info">
                  <span className="cart-product-qty">1</span>x $84.00
                </span>
              </div>
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img
                    src="assets/images/products/cart/product-1.jpg"
                    alt="product"
                  />
                </a>
              </figure>
              <a href="#" className="btn-remove" title="Remove Product">
                <i className="icon-close"></i>
              </a>
            </div>
            <div className="product">
              <div className="product-cart-details">
                <h4 className="product-title">
                  <a href="product.html">Blue utility pinafore denim dress</a>
                </h4>
                <span className="cart-product-info">
                  <span className="cart-product-qty">1</span>x $76.00
                </span>
              </div>
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img
                    src="assets/images/products/cart/product-2.jpg"
                    alt="product"
                  />
                </a>
              </figure>
              <a href="#" className="btn-remove" title="Remove Product">
                <i className="icon-close"></i>
              </a>
            </div>
          </div>
          <div className="dropdown-cart-total">
            <span>Total</span>
            <span className="cart-total-price">$160.00</span>
          </div>
          <div className="dropdown-cart-action">
            <a href="cart.html" className="btn btn-primary">
              View Cart
            </a>
            <a href="checkout.html" className="btn btn-outline-primary-2">
              <span>Checkout</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
