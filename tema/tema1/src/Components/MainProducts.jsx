import React from "react";
import ProductCart from "./ProductCart";

export default function MainProducts() {
  return (
    <div className="container new-arrivals">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">New Arrivals</h2>
        </div>

        <div className="heading-right">
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="new-all-link"
                data-toggle="tab"
                href="#new-all-tab"
                role="tab"
                aria-controls="new-all-tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-tv-link"
                data-toggle="tab"
                href="#new-tv-tab"
                role="tab"
                aria-controls="new-tv-tab"
                aria-selected="false"
              >
                TV
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-computers-link"
                data-toggle="tab"
                href="#new-computers-tab"
                role="tab"
                aria-controls="new-computers-tab"
                aria-selected="false"
              >
                Computers
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-phones-link"
                data-toggle="tab"
                href="#new-phones-tab"
                role="tab"
                aria-controls="new-phones-tab"
                aria-selected="false"
              >
                Tablets & Cell Phones
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-watches-link"
                data-toggle="tab"
                href="#new-watches-tab"
                role="tab"
                aria-controls="new-watches-tab"
                aria-selected="false"
              >
                Smartwatches
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-acc-link"
                data-toggle="tab"
                href="#new-acc-tab"
                role="tab"
                aria-controls="new-acc-tab"
                aria-selected="false"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content tab-content-carousel just-action-icons-sm">
        <div
          className="tab-pane p-0 fade show active"
          id="new-all-tab"
          role="tabpanel"
          aria-labelledby="new-all-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'
          >
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="new-tv-tab"
          role="tabpanel"
          aria-labelledby="new-tv-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'
          >
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="new-computers-tab"
          role="tabpanel"
          aria-labelledby="new-computers-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'
          >
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="new-phones-tab"
          role="tabpanel"
          aria-labelledby="new-phones-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'
          >
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="new-watches-tab"
          role="tabpanel"
          aria-labelledby="new-watches-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'
          >
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="new-acc-tab"
          role="tabpanel"
          aria-labelledby="new-acc-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'
          >
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </div>
    </div>
  );
}
