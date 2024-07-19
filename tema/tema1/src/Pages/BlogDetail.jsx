import React from "react";

export default function BlogDetail() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Blog</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Fullwidth
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <figure className="entry-media">
          <img
            src="assets/images/blog/single/fullwidth/1.jpg"
            alt="image desc"
          />
        </figure>
        <div className="container">
          <article className="entry single-entry entry-fullwidth">
            <div className="row">
              <div className="col-lg-11">
                <div className="entry-body">
                  <div className="entry-meta">
                    <span className="entry-author">
                      by <a href="#">John Doe</a>
                    </span>
                    <span className="meta-separator">|</span>
                    <a href="#">Nov 22, 2018</a>
                    <span className="meta-separator">|</span>
                    <a href="#">2 Comments</a>
                  </div>

                  <h2 className="entry-title entry-title-big">
                    Fusce pellentesque suscipit nibh.
                  </h2>

                  <div className="entry-cats">
                    in <a href="#">Travel</a>
                  </div>

                  <div className="entry-content editor-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                      In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Nullam mollis. Ut justo. Suspendisse potenti.
                    </p>

                    <p>
                      Sed egestas, ante et vulputate volutpat, eros pede semper
                      est, vitae luctus metus libero eu augue. Morbi purus
                      libero, faucibus adipiscing, commodo quis, gravida id,
                      est. Sed lectus. Praesent elementum hendrerit tortor. Sed
                      semper lorem at felis. Vestibulum volutpat, lacus a{" "}
                      <a href="#">ultrices sagittis</a>, mi neque euismod dui,
                      eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                      dapibus eu, fermentum et, dapibus sed, urna.
                    </p>

                    <p>
                      Morbi interdum mollis sapien. Sed ac risus. Phasellus
                      lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar
                      risus, vitae facilisis libero dolor a purus. Sed vel
                      lacus. Mauris nibh felis, adipiscing varius, adipiscing
                      in, lacinia vel, tellus. Suspendisse ac urna. Etiam
                      pellentesque mauris ut lectus. Nunc tellus ante, mattis
                      eget, gravida vitae, ultricies ac, leo. Integer leo pede,
                      ornare a, lacinia eu, vulputate vel, nisl.
                    </p>

                    <div className="pb-1"></div>

                    <img
                      src="assets/images/blog/single/fullwidth/2.jpg"
                      alt="image"
                    />

                    <div className="pb-1"></div>

                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
                      ante et vulputate volutpat, eros pede semper est, vitae
                      luctus metus libero eu augue. Morbi purus libero, faucibus
                      adipiscing, commodo quis, gravida id, est. Sed lectus.
                      Praesent <a href="#">elementum hendrerit</a> tortor. Sed
                      semper lorem at felis. Vestibulum volutpat, lacus a
                      ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                      sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                      fermentum et, dapibus sed, urna.
                    </p>

                    <blockquote>
                      <p>
                        “ Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue. Vivamus
                        vestibulum ntulla nec ante. ”
                      </p>
                    </blockquote>

                    <h3>Donec nec justo eget felis facilisis fermentum.</h3>

                    <p>
                      Morbi purus libero, faucibus adipiscing, commodo quis,
                      gravida id, est. Sed lectus. Praesent elementum hendrerit
                      tortor. Sed semper lorem at felis. Vestibulum volutpat,
                      lacus a ultrices sagittis, mi neque euismod dui, eu
                      pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                      dapibus eu, fermentum et, dapibus sed, urna. Morbi
                      interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                      magna a ullamcorper laoreet, lectus arcu pulvinar risus,
                      vitae facilisis libero dolor a purus. Sed vel lacus.{" "}
                    </p>

                    <p>
                      Mauris nibh felis, adipiscing varius, adipiscing in,
                      lacinia vel, tellus. Suspendisse ac urna. Etiam
                      pellentesque mauris ut lectus. Nunc tellus ante, mattis
                      eget, gravida vitae, ultricies ac, leo. Integer leo pede,
                      ornare a, lacinia eu, vulputate vel, nisl.
                    </p>

                    <div className="pb-1"></div>

                    <img
                      src="assets/images/blog/single/fullwidth/3.jpg"
                      alt="image"
                    />

                    <div className="pb-1"></div>

                    <p>
                      Praesent elementum hendrerit tortor. Sed semper lorem at
                      felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                      neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                      Phasellus pede arcu, dapibus eu, fermentum et, dapibus
                      sed, urna. Morbi interdum mollis sapien. Sed ac risus.
                      Phasellus lacinia, magna a ullamcorper laoreet, lectus
                      arcu pulvinar risus, vitae facilisis libero dolor a purus.
                      Sed vel lacus. Mauris nibh felis, adipiscing varius,
                      adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
                      Etiam pellentesque mauris ut lectus. Nunc tellus ante,
                      mattis eget, gravida vitae, ultricies ac, leo. Integer leo
                      pede, ornare a, lacinia eu, vulputate vel, nisl.
                    </p>
                  </div>

                  <div className="entry-footer row no-gutters">
                    <div className="col">
                      <div className="entry-tags">
                        <span>Tags:</span> <a href="#">photography</a>{" "}
                        <a href="#">style</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-1 order-lg-first mb-2 mb-lg-0">
                <div className="sticky-content">
                  <div className="social-icons social-icons-colored social-icons-vertical">
                    <span className="social-label">SHARE:</span>
                    <a
                      href="#"
                      className="social-icon social-facebook"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-twitter"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-pinterest"
                      title="Pinterest"
                      target="_blank"
                    >
                      <i className="icon-pinterest"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-linkedin"
                      title="Linkedin"
                      target="_blank"
                    >
                      <i className="icon-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="entry-author-details">
              <figure className="author-media">
                <a href="#">
                  <img
                    src="assets/images/blog/single/author.jpg"
                    alt="User name"
                  />
                </a>
              </figure>

              <div className="author-body">
                <div className="author-header row no-gutters flex-column flex-md-row">
                  <div className="col">
                    <h4>
                      <a href="#">John Doe</a>
                    </h4>
                  </div>
                  <div className="col-auto mt-1 mt-md-0">
                    <a href="#" className="author-link">
                      View all posts by John Doe{" "}
                      <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="author-content">
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas auguae, eu vulputate magna eros eu erat. Aliquam
                    erat volutpat.{" "}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <nav className="pager-nav" aria-label="Page navigation">
            <a
              className="pager-link pager-link-prev"
              href="#"
              aria-label="Previous"
              tabindex="-1"
            >
              Previous Post
              <span className="pager-link-title">
                Cras iaculis ultricies nulla
              </span>
            </a>

            <a
              className="pager-link pager-link-next"
              href="#"
              aria-label="Next"
              tabindex="-1"
            >
              Next Post
              <span className="pager-link-title">Praesent placerat risus</span>
            </a>
          </nav>

          <div className="related-posts">
            <h3 className="title">Related Posts</h3>

            <div
              className="owl-carousel owl-simple"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":1
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    }
                                }
                            }'
            >
              <article className="entry entry-grid">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-1.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>

                <div className="entry-body">
                  <div className="entry-meta">
                    <a href="#">Nov 22, 2018</a>
                    <span className="meta-separator">|</span>
                    <a href="#">2 Comments</a>
                  </div>

                  <h2 className="entry-title">
                    <a href="single.html">Cras ornare tristique elit.</a>
                  </h2>

                  <div className="entry-cats">
                    in <a href="#">Lifestyle</a>,<a href="#">Shopping</a>
                  </div>
                </div>
              </article>

              <article className="entry entry-grid">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-2.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>

                <div className="entry-body">
                  <div className="entry-meta">
                    <a href="#">Nov 21, 2018</a>
                    <span className="meta-separator">|</span>
                    <a href="#">0 Comments</a>
                  </div>

                  <h2 className="entry-title">
                    <a href="single.html">Vivamus ntulla necante.</a>
                  </h2>

                  <div className="entry-cats">
                    in <a href="#">Lifestyle</a>
                  </div>
                </div>
              </article>

              <article className="entry entry-grid">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-3.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>

                <div className="entry-body">
                  <div className="entry-meta">
                    <a href="#">Nov 18, 2018</a>
                    <span className="meta-separator">|</span>
                    <a href="#">3 Comments</a>
                  </div>

                  <h2 className="entry-title">
                    <a href="single.html">Utaliquam sollicitudin leo.</a>
                  </h2>

                  <div className="entry-cats">
                    in <a href="#">Fashion</a>,<a href="#">Lifestyle</a>
                  </div>
                </div>
              </article>

              <article className="entry entry-grid">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/grid/3cols/post-4.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>

                <div className="entry-body">
                  <div className="entry-meta">
                    <a href="#">Nov 15, 2018</a>
                    <span className="meta-separator">|</span>
                    <a href="#">4 Comments</a>
                  </div>

                  <h2 className="entry-title">
                    <a href="single.html">Fusce pellentesque suscipit.</a>
                  </h2>

                  <div className="entry-cats">
                    in <a href="#">Travel</a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="comments">
            <h3 className="title">0 Comment</h3>
          </div>
          <div className="reply">
            <div className="heading">
              <h3 className="title">Leave A Reply</h3>
              <p className="title-desc">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>

            <form action="#">
              <label for="reply-message" className="sr-only">
                Comment
              </label>
              <textarea
                name="reply-message"
                id="reply-message"
                cols="30"
                rows="4"
                className="form-control"
                required
                placeholder="Comment *"
              ></textarea>

              <div className="row">
                <div className="col-md-6">
                  <label for="reply-name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="reply-name"
                    name="reply-name"
                    required
                    placeholder="Name *"
                  />
                </div>

                <div className="col-md-6">
                  <label for="reply-email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="reply-email"
                    name="reply-email"
                    required
                    placeholder="Email *"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-outline-primary-2">
                <span>POST COMMENT</span>
                <i className="icon-long-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
