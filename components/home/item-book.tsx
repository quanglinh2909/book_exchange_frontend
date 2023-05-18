import { PATH_API } from "@/constants";
import { Grid, Stack, Typography, Card } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
export interface IItemBookProps {
  data?: any;
}

export default function ItemBook(props: IItemBookProps) {
  const { data } = props;
  const base64Flag = "data:image/jpeg;base64,";
  const router = useRouter();
  const fowardPage = (idBook: string) => {
    router.push(
      {
        pathname: "/details-page",
        query: {
          idBook: idBook,
        },
      },
      "/details-page"
    );
  };
  useEffect(() => {
    //console.log(props.data);
  });
  return (
    <Grid
      onClick={() => fowardPage(props.data.bookId)}
      item
      xs={6}
      sm={4}
      md={4}
      lg={4}
      xl={4}
      sx={{ cursor: "pointer", minHeight: "290px" }}
    >
      <Card sx={{ height: "100%" }}>
        <Stack>
          <Stack sx={{ height: "250px" }}>
            <img
              src={base64Flag + data?.productImages[0]?.picByte}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Stack>
          <Stack p={2}>
            <Typography
              variant={"body1"}
              sx={{
                fontWeight: 600,
                color: "#000",
                fontSize: "18px",
                "&:hover": {
                  //màu xanh khi hover
                  color: "blue",
                },
              }}
            >
              {data?.bookName}
            </Typography>
            <Typography
              variant={"body1"}
              sx={{
                fontWeight: 400,
                color: "#000",
                fontSize: "14px",
              }}
            >
              {data?.author?.name}
            </Typography>
            <Typography
              variant={"body1"}
              sx={{
                fontWeight: 400,
                color: "#000",
                fontSize: "14px",
                //chữ nghiêng
                fontStyle: "italic",
              }}
            >
              {data?.createdAt}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
}
