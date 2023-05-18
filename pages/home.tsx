import { generalApi } from "@/api-client";
import { HomeApi } from "@/api-client/home";
import Main2Layout from "@/components/common/layout/main2";
import NewBookHome from "@/components/home/new-book";
import SwiperSlideHomes from "@/components/home/swiper-slide-home";
import { setLoading } from "@/store";
import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  const [dataListBook, setDataListBook] = React.useState<any>([]);
  const [dataListBookCategory, setDataListBookCategory] = React.useState<any>(
    []
  );
  const dispatch = useDispatch();
  const dataBook = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await HomeApi.getListNewBooks();
      const { data: dataCategory } = await HomeApi.getListBookCategory();
      setDataListBook(data);
      setDataListBookCategory(dataCategory);
    } catch (error) {
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    dataBook();
  }, []);

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
      <NewBookHome data={dataListBook} title="Mới đăng tải" />
      {dataListBookCategory?.map((item: any, index: number) => (
        <NewBookHome data={item.listBook} title={item?.name} key={index} />
      ))}
    </Stack>
  );
}

HomePage.Layout = Main2Layout;
