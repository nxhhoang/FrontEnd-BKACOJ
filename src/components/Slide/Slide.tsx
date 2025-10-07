import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import sanbong from "../../assets/images/sanbong.jpeg";
// import slbk from "../../assets/images/slbk.jpg";
// import slbktv from "../../assets/images/slbktv.jpg";
import Regional2020 from "../../assets/images/Regional2020.jpg";
import Regional2022 from "../../assets/images/Regional2022.jpg";
import Regional2023 from "../../assets/images/Regional2023.jpg";
import Regional2024 from "../../assets/images/Regional2024.jpg";
import { Link } from "react-router-dom";

export default function Slide() {
  const slides = [
    // { image: sanbong },
    // { image: slbk },
    // { image: slbktv },
    { image: Regional2020},
    { image: Regional2022},
    { image: Regional2023},
    { image: Regional2024},
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      loop
      speed={2000}
      className='w-full h-[90vh] relative'
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div className='w-full h-full bg-cover bg-center relative' style={{ backgroundImage: `url(${s.image})` }}>
            {/* Overlay (làm tối nền) */}
            <div className='absolute inset-0 bg-black/40' />

            {/* Nội dung hiển thị trên slide */}
            <div className='absolute top-1/5 left-20 text-white z-10'>
              <div className='absolute -inset-4 bg-black/50 rounded-md -z-10'></div>
              <h1 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>Welcome to BKAC OJ</h1>
              <Link
                to='https://www.facebook.com/bk.algorithms.club/'
                target='_blank'
                className='inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition'
              >
                Facebook
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
