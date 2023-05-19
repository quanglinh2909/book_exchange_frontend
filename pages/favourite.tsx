import Main2Layout from "@/components/common/layout/main2";
import NewBookHome from "@/components/home/new-book";
import { Stack } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";

export interface IFavouritePageProps {}

export default function FavouritePage(props: IFavouritePageProps) {
  const user = useSelector((state: any) => state.user);

  return (
    <Stack>
      <NewBookHome data={user.follows} title="Danh sách yêu thích" />
    </Stack>
  );
}
FavouritePage.Layout = Main2Layout;
