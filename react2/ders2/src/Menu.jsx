function Menu(veri) {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {veri.data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
