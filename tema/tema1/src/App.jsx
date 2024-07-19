import Header from "./Components/Header";
import Slider from "./Components/Slider";
import MainCategory from "./Components/MainCategory";
import Banner from "./Components/Banner";
import MainProducts from "./Components/MainProducts";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Extras from "./Components/Extras";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";
import BlogDetail from "./Pages/BlogDetail";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import ProductDetail from "./Pages/ProductDetail";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div class="page-wrapper">
      <Header />
      <main class="main">
        {/*  <Slider />
        <MainCategory />
        <div className="container">
          <div className="row justify-content-center">
            <Banner
              col="6"
              img="assets/images/demos/demo-4/banners/banner-1.png"
            />
            <Banner
              col="6"
              img="assets/images/demos/demo-4/banners/banner-1.png"
            />
          </div>
        </div>
        <MainProducts />
        <About />
        <Blog />
        
        <Shop />*
        <BlogDetail />
        <Checkout />
        <Contact />
        <ProductDetail />
        <Wishlist />*/}
        <Cart />
      </main>
      <Footer />
      <Extras />
    </div>
  );
}

export default App;
