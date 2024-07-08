import Menu from "./Menu";
function Header(veri) {
  return (
    <div>
      {veri.title}-{veri.content}
      <Menu data={veri.menu} />
    </div>
  );
}

export default Header;
