import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/hakkimizda">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/iletisim">İletişim</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/" element={<Anasayfa />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
function Anasayfa() {
  return <h2>Anasayfa</h2>;
}
function Hakkimizda() {
  return <h2>Hakkimizda</h2>;
}
function Iletisim() {
  return <h2>İletişim</h2>;
}
