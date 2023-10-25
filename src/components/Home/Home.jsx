import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ubication1 from "../../../public/MENU/slideubi.png"
import ubication2 from "../../../public/MENU/slideubi2.png"
import ubication3 from "../../../public/MENU/slideubi3.png"

import icon from "../../../public/Logo/4.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
  return (
    <>
      <section className='carousel-seccion'>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
              delay: 2400,
              disableOnInteraction: false,
          }}
          slidesPerView={1}
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
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='slide-img'>
              <img src={ubication1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={ubication2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide-img'>
              <img src={ubication3} alt="" />
            </div>
          </SwiperSlide>

        </Swiper>
      </section>

      <section className='about-section'>
        <div className='about-container'>
          <div className='about-text'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum velit eum mollitia nihil ad maxime culpa doloremque omnis. Nulla assumenda quia natus explicabo nihil architecto beatae quas distinctio recusandae?</p>
          </div>
        </div>
        <div className='about-image'>
          <img src={icon} alt="" />
        </div>
      </section>

    </>
  );
}

export default Home