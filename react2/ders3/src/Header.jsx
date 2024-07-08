import Logo from "./Logo";
import Menu from "./Menu";
function Header(veri) {
  return (
    <div>
      <h1>{veri.title}</h1>
      <Logo logo={veri.logo} />
      <Menu menu={veri.menuItems} />
    </div>
  );
}
export default Header;
