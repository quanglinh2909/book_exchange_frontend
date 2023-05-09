import { Grid, Stack, Typography, Card } from "@mui/material";
import * as React from "react";

export interface IItemBookProps {}

export default function ItemBook(props: IItemBookProps) {
  return (
    <Grid item xs={6} sm={3} md={2} lg={2} xl={2} sx={{ cursor: "pointer" }}>
      <Card>
        <Stack>
          <Stack sx={{ height: "200px" }}>
            <img
              src="\assets\images\products\nxbtre_full_04152018_031555.jpg"
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
              Tôi thấy hoa vàng trên cỏ xanh
            </Typography>
            <Typography
              variant={"body1"}
              sx={{
                fontWeight: 400,
                color: "#000",
                fontSize: "14px",
              }}
            >
              Nguyễn Nhật Ánh
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
              29 phút trước
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
}
