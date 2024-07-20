'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image"
import a from '@/assets/images/a.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CoursesType from '../PostTypes/CoursesType';

export default function CoursesSwiper() {

    return (
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }}
        navigation={false}
        pagination={{ clickable: true }}
        >
                    <SwiperSlide>
                    </SwiperSlide>
        </Swiper> 
  );
};