import React from "react";

export default function ShopCart() {
  return (
    <div className="col-6 col-md-4 col-lg-4">
      <div className="product product-7 text-center">
        <figure className="product-media">
          <a href="product.html">
            <img
              src="assets/images/products/product-12.jpg"
              alt="Product image"
              className="product-image"
            />
          </a>
          <div className="product-action-vertical">
            <a
              href="#"
              className="btn-product-icon btn-wishlist btn-expandable"
            >
              <span>add to wishlist</span>
            </a>
            <a
              href="popup/quickView.html"
              className="btn-product-icon btn-quickview"
              title="Quick view"
            >
              <span>Quick view</span>
            </a>
            <a
              href="#"
              className="btn-product-icon btn-compare"
              title="Compare"
            >
              <span>Compare</span>
            </a>
          </div>
          <div className="product-action">
            <a href="#" className="btn-product btn-cart">
              <span>add to cart</span>
            </a>
          </div>
        </figure>
        <div className="product-body">
          <div className="product-cat">
            <a href="#">Bags</a>
          </div>
          <h3 className="product-title">
            <a href="product.html">Black soft RI weekend travel bag</a>
          </h3>
          <div className="product-price">$68.00</div>
          <div className="ratings-container">
            <div className="ratings">
              <div className="ratings-val" style={{ width: "0%" }}></div>
            </div>
            <span className="ratings-text">( 0 Reviews )</span>
          </div>
        </div>
      </div>
    </div>
  );
}
