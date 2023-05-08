import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box, Stack } from "@mui/material";

export interface IDemoProps {}

export default function Demo(props: IDemoProps) {
  return (
    <Box height={"300px"}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            style={{ height: "300px", width: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            style={{ height: "300px", width: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            style={{ height: "300px", width: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            style={{ height: "300px", width: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            style={{ height: "300px", width: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            style={{ height: "300px", width: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            style={{ height: "300px", width: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px", width: "300px" }}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
