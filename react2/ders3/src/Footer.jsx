import Logo from "./Logo";
import Content from "./Content";
function Footer(veri) {
  return (
    <footer>
      <hr />
      <p>
        <strong>{veri.title}</strong>
      </p>
      <Logo logo={veri.logo} />
      <Content content={veri.content} />
    </footer>
  );
}
export default Footer;
