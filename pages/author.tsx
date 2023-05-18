import { generalApi } from "@/api-client";
import Main2Layout from "@/components/common/layout/main2";
import NewBookHome from "@/components/home/new-book";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

export interface IAuthorAdminpageProps {}

export default function AuthorAdminpage(props: IAuthorAdminpageProps) {
  const [listBookByAuthor, setListBookByAuthor] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await generalApi.getListBookAuthor();
      setListBookByAuthor(data);
    };
    fetchData();
  }, []);
  return (
    <Stack sx={{ padding: "20px" }}>
      {listBookByAuthor.map((item: any, index) => (
        <NewBookHome data={item.listBook} title={item?.name} key={index} />
      ))}
    </Stack>
  );
}

AuthorAdminpage.Layout = Main2Layout;
