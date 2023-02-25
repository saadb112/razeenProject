import React from 'react'
import "./Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import slider3 from "./images/slider1.png"
import slider2 from "./images/slider2.png"
import slider1 from "./images/slider3.png"
const Slider = () => {


    return (
        <div className='slider-sec'>
            <h3>Tjänster</h3>
            <h2>Upptäck våra tjänster</h2>

            <Swiper className='swiper'
                spaceBetween={60}
                slidesPerView={3.3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='slide'><img src={slider1} alt="" />
                    <h2>Badrumsrenovering</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider2} alt="" />
                    <h2>Byta Toalettstol</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider3} alt="" />
                    <h2>Rorjour</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider1} alt="" />
                    <h2>Badrumsrenovering</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider2} alt="" />
                    <h2>Byta Toalettstol</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider3} alt="" />
                    <h2>Rorjour</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider1} alt="" />
                    <h2>Badrumsrenovering</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider2} alt="" />
                    <h2>Byta Toalettstol</h2>
                </SwiperSlide>
                <SwiperSlide className='slide'><img src={slider3} alt="" />
                    <h2>Rorjour</h2>
                </SwiperSlide>

                ...
            </Swiper>
        </div >
    )
}

export default Slider
