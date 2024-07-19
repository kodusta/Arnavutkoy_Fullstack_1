import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSliders } from "../store/sliderSlice";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

export default function Slider() {
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.sliders.sliders);
  const slideStatus = useSelector((state) => state.sliders.status);
  const error = useSelector((state) => state.sliders.error);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  useEffect(() => {
    if (slideStatus === "idle") {
      dispatch(fetchSliders());
    }
  }, [slideStatus, dispatch]);

  const next = () => {
    if (animating) return;
    const netxIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(netxIndex);
  };

  const previous = () => {
    if (animating) return;
    const previousIndex =
      activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(previousIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slidesItems = slides.map((slide) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={slide.id}
      >
        <img src={slide.src} alt={slide.alt} />
        <CarouselCaption
          captionText={slide.caption}
          captionHeader={slide.alt}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={slides}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slidesItems}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
