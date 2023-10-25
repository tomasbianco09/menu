import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import burger1 from "../../../public/MENU/slide1.png"
import burger2 from "../../../public/MENU/slide2.png"
import burger3 from "../../../public/MENU/slide3.png"
import burger4 from "../../../public/MENU/slide4.png"

import menu1 from "../../../public/MENU/menu1.png"
import menu2 from "../../../public/MENU/menu2.png"
import menu3 from "../../../public/MENU/fries&snacks.png"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Nosotros.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Nosotros() {
  return (
    <>
      <section className='nosotros-seccion'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className='slide-img'>
              <img src={burger1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={burger2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={burger3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={burger4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={menu1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={menu2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={menu3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Nosotros