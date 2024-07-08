import "./App.css";
import Header from "./Header";
import Vite from "/vite.svg";
import Body from "./Body";
import Footer from "./Footer";
function App() {
  const menuItems = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <>
      <Header logo={<Vite />} menuItems={menuItems} title="My App" />
      <Body
        title="My Body"
        slider="https://picsum.photos/300/300"
        content="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur."
      />
      <Footer
        logo={<Vite />}
        title="My Footer"
        content="Lorem Ipsum, dizgi ve baskı endüstrisinde"
      />
    </>
  );
}
export default App;
