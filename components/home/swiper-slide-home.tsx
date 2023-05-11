import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Box, Stack } from "@mui/material";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export interface ISwiperSlideHomesProps {}

export default function SwiperSlideHomes(props: ISwiperSlideHomesProps) {
  return (
    <Box height={"500px"}>
      <Swiper
        effect={"coverflow"}
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          // pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <Stack sx={{ width: "100%", height: "500px" }}>
            <img src="\assets\images\products\maxresdefault.jpg" />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack sx={{ width: "100%", height: "300px" }}>
            <img src="\assets\images\products\338006858_724902446027172_6276519046519710165_n.jpg" />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack sx={{ width: "100%", height: "300px" }}>
            <img src="\assets\images\products\mat_biec.jpg" />
          </Stack>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
