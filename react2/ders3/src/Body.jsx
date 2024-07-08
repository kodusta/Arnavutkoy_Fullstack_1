import Slider from "./Slider";
import Content from "./Content";
function Body(veri) {
  return (
    <div>
      <hr />
      <h5>{veri.title}</h5>
      <Slider slider={veri.slider} />
      <Content content={veri.content} />
    </div>
  );
}
export default Body;
