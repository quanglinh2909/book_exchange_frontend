import Main2Layout from "@/components/common/layout/main2";
import NewBookHome from "@/components/home/new-book";
import SwiperSlideHomes from "@/components/home/swiper-slide-home";
import { Stack } from "@mui/material";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <Stack
      bgcolor={"#fff"}
      height={"92vh"}
      spacing={3}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.2)",
          // outline: '1px solid slategrey',
        },
      }}
    >
      <SwiperSlideHomes />
      <NewBookHome title="Mới đăng tải" />
      <NewBookHome title="Ngôn tình" />
      <NewBookHome title="Tài liệu" />
      <NewBookHome title="Tiểu thuyết" />
    </Stack>
  );
}

HomePage.Layout = Main2Layout;
