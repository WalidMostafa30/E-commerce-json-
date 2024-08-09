import "./SiwperSlideBtn.css";
import { useSwiper } from "swiper/react";

const SiwperSlideBtn = () => {
  const swiperslide = useSwiper();

  return (
    <div className="SiwperSlideBtn">
      <button
        className="SiwperSlideBtn-prev"
        onClick={() => swiperslide.slidePrev()}
      >
        {"<"}
      </button>
      <button
        className="SiwperSlideBtn-next"
        onClick={() => swiperslide.slideNext()}
      >
        {">"}
      </button>
    </div>
  );
};

export default SiwperSlideBtn;
