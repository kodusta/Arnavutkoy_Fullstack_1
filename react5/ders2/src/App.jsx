import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/15">Anasayfa</Link>
          </li>
          <li>
            <Link to="/Kodusta">Anasayfa Veri</Link>
          </li>
          <li>
            <Link to="/hakkimizda">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/iletisim">İletişim</Link>
          </li>
          <li>
            <Link to="/galeri">Gaaleri</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/" element={<Anasayfa />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
function Notfound() {
  return <h2>Page Not Found</h2>;
}
function Anasayfa() {
  let { id } = useParams();
  return <h2>Anasayfa ID:{id}</h2>;
}
function Hakkimizda() {
  return <h2>Hakkimizda</h2>;
}
function Iletisim() {
  return <h2>İletişim</h2>;
}
