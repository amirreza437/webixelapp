'use client'

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cards';



import { EffectCards } from 'swiper/modules';

export default function CustomersComments() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 1</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 2</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 3</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 4</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 5</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 6</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 7</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 8</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-2xl font-bold text-lg">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
