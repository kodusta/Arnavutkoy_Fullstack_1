import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import BlogDetail from "./components/BlogDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="blog/:blogId" element={<BlogDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
