import React from 'react'
import './testimonial.css'
import Data  from './Data.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <section className="testimonial container section" id='testimonial'>
        <h2 className="section__title">Testimonials</h2>
        <span className="section__subtitle">My Testimonials</span>

        <Swiper className="testimonila__container"
        spaceBetween={24}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        }}
        modules={[Pagination]}>
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} className='testimonial__img mySwiper' alt="" />
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonial