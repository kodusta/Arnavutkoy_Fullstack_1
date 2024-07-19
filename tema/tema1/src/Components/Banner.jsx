import React from "react";
export default function Banner(props) {
  return (
    <div className={"col-md-" + props.col + " col-lg-4"}>
      <div className="banner banner-overlay banner-overlay-light">
        <a href="#">
          <img src={props.img} alt="Banner" />
        </a>
        <div className="banner-content">
          <h4 className="banner-subtitle">
            <a href="#">Smart Offer</a>
          </h4>
          <h3 className="banner-title">
            <a href="#">
              Save $150{" "}
              <strong>
                on Samsung <br />
                Galaxy Note9
              </strong>
            </a>
          </h3>
          <a href="#" className="banner-link">
            Shop Now<i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
