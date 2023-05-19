import { Stack } from "@mui/joy";
import { Typography, Grid } from "@mui/material";
import * as React from "react";
import ItemBook from "./item-book";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "next/link";
import { is } from "date-fns/locale";
export interface INewBookHomeProps {
  title?: string;
  isAllBooks?: boolean;
  data?: any;
}

export default function NewBookHome(props: INewBookHomeProps) {
  const { title, isAllBooks, data } = props;
  return (
    <Stack flex={1}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          color={"#000"}
          variant={"body1"}
          sx={{
            fontWeight: 600,
            fontSize: "30px",
            ml: "16px",
          }}
        >
          {title}
        </Typography>
        <Stack
          color={"#000"}
          direction={"row"}
          alignItems={"center"}
          sx={{
            cursor: "pointer",
            mr: "16px",
            "&:hover": {
              //đổi màu khi hover
              color: "blue",
            },
          }}
        >
          {isAllBooks ? <Link href="/home">
                <Typography
                  variant={"body1"}
                  color={"#000"}
                  className="hover:text-blue-500 transition duration-300 flex items-center"
                  sx={{
                    fontSize: "18px",
                  }}

                >
                 
                  <NavigateBeforeIcon  />
                 Quay lại
                </Typography>

            </Link> : <Link href="/allbook">
                <Typography
                  variant={"body1"}
                  color={"#000"}
                  className="hover:text-blue-500 transition duration-300 flex items-center"
                  sx={{
                    fontSize: "18px",
                  }}

                >
                 
                  Xem tất cả
                  <NavigateNextIcon  />
                </Typography>

            </Link>}
            
        </Stack>
      </Stack>
      <Stack mt={2} p={2}>
        <Grid container spacing={3}>
            {data?.map((item: any, index:number) => (
              <ItemBook key={index} data={item} />
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
