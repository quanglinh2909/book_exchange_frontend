import { generalApi } from "@/api-client";
import Main2Layout from "@/components/common/layout/main2";
import NewBookHome from "@/components/home/new-book";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

export interface IFavouritePageProps {}

export default function FavouritePage(props: IFavouritePageProps) {
  const user = useSelector((state: any) => state.user);
  const [follows, setFollows] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await generalApi.getFollows();
      setFollows(data);
    };
    fetch();
  });
  return (
    <Stack>
      <NewBookHome data={follows} title="Danh sách yêu thích" />
    </Stack>
  );
}
FavouritePage.Layout = Main2Layout;
