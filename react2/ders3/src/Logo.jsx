function Logo(veri) {
  console.log(veri);
  return (
    <div>
      <img src={veri.logo.type} alt="Logo" />
    </div>
  );
}
export default Logo;
