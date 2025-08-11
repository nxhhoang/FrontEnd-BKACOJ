import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slide.css";

export default function Slide() {
  const slides = [
    {
      image: "/images/sanbong.jpeg",
    },
    {
      image: "/images/slbk.jpg",
    },
    {
      image: "/images/slbktv.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="custom-swiper"
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div
            className="slide-bg"
            style={{
              backgroundImage: `url(${s.image})`,
            }}
          >
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
