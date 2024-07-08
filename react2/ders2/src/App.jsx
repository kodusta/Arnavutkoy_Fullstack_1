import "./App.css";
import Header from "./Header";
import Categories from "./Categories";
import Products from "./Products";
import Footer from "./Footer";
import Test from "./Test";
function App() {
  return (
    <>
      <Test title="Test Sayfası" content="Test Content" />
      <Header
        title="Header Sayfası"
        content="Header Content"
        menu={["Anasayfa", "Hakkımızda", "İletişim", "Blog"]}
      />
      <Categories
        title="Categories Sayfası"
        categories={["Elektronik", "Giyim", "Kitap"]}
      />
      <Products title="Products Sayfası" />
      <Footer title="Footer Sayfası" />
    </>
  );
}
export default App;
