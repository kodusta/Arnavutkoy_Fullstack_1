import { Container, Row, Col } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Menu from "./Menu";

function App() {
  const title = "React Uygulaması";
  const menuItems = ["Anasayfa", "Hakkımızda", "İletişim"];
  const members = [
    { name: "Ali", email: "ali@gmail.com", role: "Admin" },
    { name: "Veli", email: "veli@gmail.com", role: "User" },
    { name: "Ayşe", email: "ayse@gmail.com", role: "User" },
  ];

  return (
    <Container fluid>
      <Row>
        <Col xs="12">
          <Navbar title={title} />
        </Col>
        <Col xs="3">
          <Menu items={menuItems} />
        </Col>
        <Col xs="9">
          <Dashboard members={members} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
