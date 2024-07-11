import { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroupItem,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  ListGroup,
  CardGroup,
  Row,
} from "reactstrap";
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kodusta</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/kodusta" target="_blank">
                Kodusta
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sepet - {sepet.length}
              </DropdownToggle>
              <DropdownMenu end>
                {sepet.map((urun) => (
                  <DropdownItem key={urun.urun.id}>
                    <button
                      style={{ cursor: "pointer", marginRight: "5px" }}
                      onClick={() => sepetguncelle(urun.urun, "arttir")}
                    >
                      +
                    </button>{" "}
                    {urun.urun.productName}- {urun.adet}{" "}
                    <button
                      style={{ cursor: "pointer", marginLeft: "5px" }}
                      onClick={() => sepetguncelle(urun.urun, "azalt")}
                    >
                      -
                    </button>
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem onClick={sepetsifirla}>Sıfırla</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Row>
        <Col xs="3">
          <ListGroup>
            {kategoriler.map((kategori) => (
              <ListGroupItem
                active={kategori.categoryName === secilikategori}
                key={kategori.id}
                onClick={() => kategoridegistir(kategori)}
              >
                {kategori.categoryName}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col xs="9">
          <h2>{secilikategori}</h2>
          <CardGroup>
            {urunler.map((urun) => (
              <Col xs="4" key={urun.id}>
                <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <CardImg
                    top
                    width="100%"
                    src={urun.image}
                    alt={urun.productName}
                  />
                  <CardBody>
                    <CardTitle>{urun.productName}</CardTitle>
                    <CardText>{urun.desc}</CardText>
                    <Button onClick={() => sepeteekle(urun)}>
                      Sepete Ekle
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
