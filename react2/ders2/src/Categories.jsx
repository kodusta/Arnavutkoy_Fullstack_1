import Category from "./Category";
function Categories(veri) {
  return (
    <div>
      {veri.title}
      {veri.categories.map((item) => (
        <Category title={item} />
      ))}
    </div>
  );
}
export default Categories;
