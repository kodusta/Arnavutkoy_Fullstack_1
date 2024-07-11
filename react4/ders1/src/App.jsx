import { useState, useEffect } from "react";
import Ust from "./components/Ust";
import Kategoriler from "./components/Kategoriler";
import Urunler from "./components/Urunler";
import { Container, Col, Row } from "reactstrap";
function App() {
  const [kategoriler, setkategoriler] = useState([]);
  const [urunler, seturunler] = useState([]);
  const [sepet, setsepet] = useState([]);
  const [secilikategori, setsecilikategori] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const kategoridegistir = (kategori) => {
    setsecilikategori(kategori.categoryName);
    urunlercek(kategori.id);
  };
  const toggle = () => {
    setisOpen(!isOpen);
  };
  const kategoricek = () => {
    let url = "http://localhost:3000/categories";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setkategoriler(data));
  };
  useEffect(() => {
    kategoricek();
  }, []);
  const urunlercek = (kategoriid) => {
    let url = "http://localhost:3000/products";
    if (kategoriid) {
      url += "?categoryId=" + kategoriid;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => seturunler(data));
  };
  useEffect(() => {
    urunlercek();
  }, []);
  const sepeteekle = (urun) => {
    let yenisepet = [...sepet];
    var uruneklenmismi = yenisepet.find((u) => u.urun.id === urun.id);
    if (uruneklenmismi) {
      uruneklenmismi.adet += 1;
    } else {
      yenisepet.push({ urun: urun, adet: 1 });
    }
    setsepet(yenisepet);
  };
  const sepetsil = (urun) => {
    let yenisepet = [...sepet];
    let uruneklenmismi = yenisepet.find((u) => u.urun.id === urun.id);
    if (uruneklenmismi) {
      if (uruneklenmismi.adet > 1) {
        uruneklenmismi.adet -= 1;
      } else {
        yenisepet = yenisepet.filter((u) => u.urun.id !== urun.id);
      }
    }
    setsepet(yenisepet);
  };
  const sepetguncelle = (urun, islem) => {
    if (islem === "arttir") {
      sepeteekle(urun);
    } else if (islem === "azalt") {
      sepetsil(urun);
    }
  };
  const sepetsifirla = () => {
    setsepet([]);
  };
  return (
    <Container>
      <Ust
        sepet={sepet}
        toggle={toggle}
        isOpen={isOpen}
        sepetguncelle={sepetguncelle}
        sepetsifirla={sepetsifirla}
      />
      <Row>
        <Col xs="3">
          <Kategoriler
            kategoriler={kategoriler}
            kategoridegistir={kategoridegistir}
            secilikategori={secilikategori}
          />
        </Col>
        <Col xs="9">
          <Urunler
            sepeteekle={sepeteekle}
            urunler={urunler}
            secilikategori={secilikategori}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
