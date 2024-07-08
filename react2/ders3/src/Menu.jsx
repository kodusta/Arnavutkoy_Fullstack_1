function Menu(veri) {
  return (
    <div>
      <ul>
        {veri.menu.map((menuItem) => (
          <li>
            {menuItem.text}-{menuItem.url}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
