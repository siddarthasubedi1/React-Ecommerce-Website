
import { useEffect, useRef } from "react";
import { getData } from "../context/DataContext";
import SliderImport from "react-slick";
import Carousel_design from "./Carousel_design";
import { ArrowRight, ArrowLeft } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./Category";

const Slider = SliderImport.default ?? SliderImport;

const Site_display = () => {
  const { fetchAllProducts, data } = getData()
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const settings = {
    dots: false,
    infinite: data?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full overflow-hidden">
      {data?.length > 0 && (
        <>
          <Slider ref={sliderRef} {...settings}>
            {data.slice(0, 19).map((item) => (
              <div key={item.id}>
                <Carousel_design item={item} />
                
              </div>
              
            ))}
          </Slider>
          <Category/>

          {/* Previous arrow */}
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous slide"
            className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-[#f53347] text-white rounded-full p-3 hover:bg-red-600 cursor-pointer"
          >
            <ArrowLeft size={24} />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next slide"
            className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-[#f53347] text-white rounded-full p-3 hover:bg-red-600 cursor-pointer"
          >
            <ArrowRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default Site_display;
