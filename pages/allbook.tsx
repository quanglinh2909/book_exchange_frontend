import * as React from 'react';
import Main2Layout from "@/components/common/layout/main2";
import NewBookHome from "@/components/home/new-book";
import { Stack } from "@mui/material";

export interface IAllBooksProps {
}

export default function AllBooks (props: IAllBooksProps) {
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
    <NewBookHome isAllBooks title="Mới đăng tải" />
  </Stack>
  );
}

AllBooks.Layout = Main2Layout;